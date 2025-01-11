import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimeServiceService } from '../../services/time-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { AuthService } from '../../services/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userId: string | null = null;
  listadoTimes: any[] = [];
  selectedTime: any;
  user: string = ''

  private formBuilder = inject(FormBuilder);
  createForm = this.formBuilder.group({
    checkInTime: ['', Validators.required],
    checkOutTime: ['', Validators.required],
  });

  constructor(
    private timeService: TimeServiceService,
    private spinner: SpinnerComponent,
    private authService: AuthService,
  ) {
    if (typeof window !== 'undefined') {
      this.userId = localStorage.getItem('user_id');
    }
    this.user = localStorage.getItem('user') || '';
  }

  editForm = this.formBuilder.group({
    checkInTimeEdit: ['', Validators.required],
    checkOutTimeEdit: ['', Validators.required],
  });

  get checkInTime() {
    return this.createForm.get('checkInTime')!;
  }

  get checkOutTime() {
    return this.createForm.get('checkOutTime')!;
  }

  get checkInTimeEdit() {
    return this.createForm.get('checkInTime')!;
  }

  get checkOutTimeEdit() {
    return this.createForm.get('checkOutTime')!;
  }

  ngOnInit(): void {
    this.loadData();
  }

  onSelectTime(time: any) {
    this.selectedTime = time;
    this.editForm.patchValue({
      checkOutTimeEdit: this.selectedTime.checkOutTime,
      checkInTimeEdit: this.selectedTime.checkInTime,
    });
  }

  loadData() {
    if (this.userId) {
      this.spinner.show();
      this.timeService.getTimes(Number(this.userId)).subscribe(
        (response) => {
          this.listadoTimes = response.times;
          this.listadoTimes.forEach(time => {
            time.checkInTime = this.formatDateForInput(time.checkInTime);
            time.checkOutTime = this.formatDateForInput(time.checkOutTime);
          });
          console.log(this.listadoTimes);
          this.spinner.hide(); 
        },
        (error) => {
          this.authService.logout();
          console.error('Error al cargar los datos', error);
          this.spinner.hide();
        }
      );
    }
  }

  formatDateToISO(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().slice(0, -1); // Remueve la "Z" final
  }

  private formatDateForInput(date: string): string {
    if (!date) return '';
    const parsedDate = new Date(date);
    return parsedDate.toISOString().slice(0, 16); // Formato compatible con `datetime-local`
  } 

  onSubmitCreate() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
  
    // Convertir los tiempos al formato ISO
    const formValue = {
      ...this.createForm.value,
      checkInTime: this.formatDateToISO(this.createForm.value.checkInTime!),
      checkOutTime: this.formatDateToISO(this.createForm.value.checkOutTime!),
    };
  
    this.timeService.postTime(Number(this.userId), formValue).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logout();  
        }
        return throwError(error); 
      })
    ).subscribe({
      next: (response) => {
        console.log(response);
        this.loadData();
      },
      error: (err) => {
        console.error('Error al crear el registro:', err);
      }
    });
    this.createForm.reset();
  }

  onSubmitEdit() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    console.log("enviando");
    const formValue = {
      ...this.editForm.value,
      checkInTime: this.formatDateToISO(this.editForm.value.checkInTimeEdit!),
      checkOutTime: this.formatDateToISO(this.editForm.value.checkOutTimeEdit!),
    };
  
    this.timeService.putTime(Number(this.userId), formValue).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logout(); 
        }
        return throwError(error);  
      })
    ).subscribe({
      next: (response) => {
        console.log(response);
        this.loadData(); 
      },
      error: (err) => {
        console.error('Error al editar el registro:', err);
      }
    });
  }

  onDelete() {
    this.timeService.deleteTime(Number(this.userId)).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logout(); 
        }
        return throwError(error); 
      })
    ).subscribe({
      next: (response) => {
        console.log(response);
        this.loadData();
      },
      error: (err) => {
        console.error('Error al borrar el registro:', err);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}

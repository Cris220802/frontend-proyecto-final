import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-tracking-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './time-tracking-modal.component.html',
  styleUrls: ['./time-tracking-modal.component.css']
})
export class TimeTrackingModalComponent {
  @Input() action: 'create' | 'edit' | 'delete' = 'create'; 
  @Input() timeTracking: any = null; 
  @Output() onAction = new EventEmitter<any>(); 

  timeTrackingForm: FormGroup;
  modalTitle = '';

  constructor(private fb: FormBuilder) {
    this.timeTrackingForm = this.fb.group({
      checkInTime: ['', Validators.required],
      checkOutTime: ['', Validators.required],
    });
  }

  ngOnChanges(): void {
    if (this.action === 'edit' && this.timeTracking) {
      this.modalTitle = 'Editar TimeTracking';
      this.timeTrackingForm.patchValue({
        checkInTime: this.timeTracking.checkInTime,
        checkOutTime: this.timeTracking.checkOutTime,
      });
    } else if (this.action === 'create') {
      this.modalTitle = 'Crear TimeTracking';
      this.timeTrackingForm.reset();
    } else if (this.action === 'delete') {
      this.modalTitle = 'Eliminar TimeTracking';
    }
  }

  create() {
    if (this.timeTrackingForm.valid) {
      this.onAction.emit({ action: 'create', data: this.timeTrackingForm.value });
    }
  }

  edit() {
    if (this.timeTrackingForm.valid) {
      this.onAction.emit({ action: 'edit', data: this.timeTrackingForm.value });
    }
  }

  delete() {
    this.onAction.emit({ action: 'delete', data: this.timeTracking });
  }
}

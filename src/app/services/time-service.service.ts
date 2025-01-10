import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { time } from '../data/time-entity';
import { times } from '../data/times-entity';


@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {
  urlApi = "https://backend-proyecto-final-1rr3.onrender.com/api/v1/time-tracking"
  // urlApi = "http://localhost:8080/api/v1/time-tracking"

  // Inyectamos el cliente http para conectarnos
  constructor( private httpClient: HttpClient) { }

  //get by user
  getTimes(userId: number): Observable<times> {
    const accessToken = localStorage.getItem('access_token');
    let headers = new HttpHeaders();

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return this.httpClient.get<times>(`${this.urlApi}/usuario/${userId}`, { headers });
  }
  //post
  postTime(id:number, time:any):Observable<time>{
    const accessToken = localStorage.getItem('access_token');
    let headers = new HttpHeaders();

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return this.httpClient.post<time>(this.urlApi+"/"+id, time, { headers })
  }
  //put
  putTime(id:number, time:any):Observable<time>{
    const accessToken = localStorage.getItem('access_token');
    let headers = new HttpHeaders();

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return this.httpClient.put<time>(this.urlApi+"/"+id, time, { headers })
  }
  //delete
  deleteTime(id:number):Observable<time>{
    const accessToken = localStorage.getItem('access_token');
    let headers = new HttpHeaders();

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return this.httpClient.delete<time>(this.urlApi+"/"+id, { headers })
  }

}
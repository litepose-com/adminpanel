import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  post(url: string,body: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${url}`,body).pipe (
        map((response: any) =>{
        return response;
      }),
      catchError((error: any) => {
        return error;
      }),
    );
  }

  get(url: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${url}`).pipe(
      map((response: any)=> {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }

  request(url: string,body: any): Observable<any> {
    return this.http.request(`${environment.baseUrl}/${url}`, body).pipe (
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }

  put(url: string,body: any): Observable<any> {
    return this.http.put(`${environment.baseUrl}/${url}`,body).pipe (
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error
      })
    )
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/${url}`).pipe (
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }
}

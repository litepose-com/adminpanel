import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUserObject: Observable<any>;

  constructor() {
    const getToken: string | null = localStorage.getItem('token') ? localStorage.getItem('token') : null;

    this.currentUserSubject = new BehaviorSubject(getToken);
    this.currentUserObject = this.currentUserSubject.asObservable();
  }

}

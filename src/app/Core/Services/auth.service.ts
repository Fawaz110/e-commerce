import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('ecommerce-token') != null) {
      this.loggedIn.next(true)
      _Router.navigate(['/home'])
    }
  }

  loggedUser: any = {}

  loggedIn = new BehaviorSubject(false)
  register(form: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'auth/signup', form)
  }
  
  login(form: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'auth/signin', form)
  }

  forgotPassword(email: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'auth/forgotPasswords', email)
  }
  varifyResetCode(code: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'auth/verifyResetCode', code)
  }

  resetPassword(resetData: object): Observable<any> {
    return this._HttpClient.put(environment.baseUrl + 'auth/resetPassword', resetData);
  }

  changePassword(data: object): Observable<any> {
    return this._HttpClient.put(environment.baseUrl + 'users/changeMyPassword', data, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    });
  }
  
  logout() {
    localStorage.removeItem('ecommerce-token');
    this.loggedIn.next(false)
    this._Router.navigate(['/login'])
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL ='https://obscure-sands-01552.herokuapp.com/'
  isLoggedIn = false;
  token:any

  constructor( private http:HttpClient) { }

  login(loginCredential) {
    return this.http.post(this.API_URL + 'auth/login', loginCredential
    ).pipe(
      tap((token:any) => {
        localStorage.setItem('token', token.result[0].token)
        this.token = token.result[0].token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
}

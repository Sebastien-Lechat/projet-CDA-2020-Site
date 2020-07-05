import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL ='https://obscure-sands-01552.herokuapp.com/'

  constructor( private http:HttpClient) { }

  login(data){
    return this.http.post(this.API_URL + 'auth/login', data)
  }
}

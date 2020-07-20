import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  API_URL ='https://obscure-sands-01552.herokuapp.com/'

  constructor(private http:HttpClient) { }

  recupererUser(token){
    return this.http.get(this.API_URL + '/user/' + token)
  }



}

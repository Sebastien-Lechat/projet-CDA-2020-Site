import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  API_URL ='https://obscure-sands-01552.herokuapp.com/'

  constructor(private http:HttpClient) { }

  recupererSubscribers(token){
    return this.http.get(this.API_URL + 'subscribers/user/' + token)
  }

  recupererSubscrib(token){
    return this.http.get(this.API_URL + 'subscribe/user/' + token)
  }
  recupererPub(token){
    return this.http.get(this.API_URL + 'post/user/' + token)
  }


}

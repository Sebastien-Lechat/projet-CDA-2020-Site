import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SignalerService {

  API_URL ='https://obscure-sands-01552.herokuapp.com/'

  constructor(private http:HttpClient) { }

  createSignalement(data){
    return this.http.post(this.API_URL + 'report/', data)
  }



}

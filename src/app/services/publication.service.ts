import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  API_URL ='https://obscure-sands-01552.herokuapp.com/'

  constructor(private http:HttpClient) { }

  getAllPublication(){
    return this.http.get(this.API_URL + 'post')
  }

  getCommentaire(id){
    return this.http.get(this.API_URL + 'commentary/post'+ id)
  }

}

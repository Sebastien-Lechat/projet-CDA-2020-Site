import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  API_URL ='https://obscure-sands-01552.herokuapp.com/'

  constructor(private http:HttpClient) { }

  getAllCommentaire(id){
    return this.http.get(this.API_URL + 'commentary/post/' + id)
  }

  getCommentaire(id){
    return this.http.get(this.API_URL + 'commentary/post'+ id)
  }
  
  postCommentaire(data){
    return this.http.post(this.API_URL + 'commentary/post',data)
  }

}

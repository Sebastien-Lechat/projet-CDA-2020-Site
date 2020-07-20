import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import { PublicationService } from '../services/publication.service';
import { CommentaireService } from '../commentaire.service';
import { SignalerService } from '../signaler.service';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-file-actualite',
  templateUrl: './file-actualite.component.html',
  styleUrls: ['./file-actualite.component.css']
})
export class FileActualiteComponent implements OnInit {
  
  publications:any;

  constructor( private publicationService: PublicationService , private commentaireService: CommentaireService ) { }

  
      ngOnInit() {
        this.publicationService.getAllPublication().subscribe(
          (response:any) => {
            for( let i = 0; i < response.posts.length; i++){
              response.posts[i].dateC = new Date(response.posts[i].dateC).toUTCString().split(', ')[1].split(' GMT')[0].split(':')[0] + ":" + new Date(response.posts[i].dateC).toUTCString().split(', ')[1].split(' GMT')[0].split(':')[1]
              this.commentaireService.getAllCommentaire(response.posts[i].idPublication).subscribe(
                (com:any) => {
                    for( let j = 0; j < com.commentaires.length; j++){
                      com.commentaires[j].dateC = new Date(com.commentaires[j].dateC).toUTCString().split(', ')[1].split(' GMT')[0].split(':')[0] + ":" + new Date(com.commentaires[j].dateC).toUTCString().split(', ')[1].split(' GMT')[0].split(':')[1]
                    }
                    response.posts[i].commentaires = com.commentaires
                    console.log(this.publications)
                },
                (error:any) =>{
                  console.log(error)
                }
              )
            
              
            }
            this.publications = response.posts
          },
          (error:any) =>{
            console.log(error)
          }
        )

        
      }


    

  
}

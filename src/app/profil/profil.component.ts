import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../abonnement.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  abonnement2: any;
  abonnement:any;
  token:any;
  publication:any;

  constructor(private abonnementService : AbonnementService ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')

    this.abonnementService.recupererSubscribers(this.token).subscribe(
      (data:any) => {
        console.log(data)
        this.abonnement = data.subscribes.length
      },
      (error:any) => {
        console.log(error)
        this.abonnement = 0
      }
    )

    this.abonnementService.recupererSubscrib(this.token).subscribe(
      (data:any) => {
        console.log(data)
        this.abonnement2 = data.subscribes.length
      },
      (error:any) => {
        console.log(error)
        this.abonnement2 = 0
      }
    )

    this.abonnementService.recupererPub(this.token).subscribe(
      (data:any) => {
        console.log(data)
        this.publication = data.post.idUser.length
      },
      (error:any) => {
        console.log(error)
        this.publication = 0
      }
    )
  }


}

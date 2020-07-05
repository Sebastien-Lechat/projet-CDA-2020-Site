import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.css']
})
export class MonPremierComponent implements OnInit {

  constructor() {
   /* constructor( private authService:AuthService, private router: Router, private  isLoggedIn: boolean) */{ }
   }

  ngOnInit(): void {
  }
 /* isLoggedIn = false;
  Inscrit(form:NgForm){
    this.authService.Inscrit({Nom : form.value.Nom, Nom_Utilisateur : form.value.Nom_Utilisateur, Email : form.value.Email, Password: form.value.Password,  Verification: form.value.Verification,}).subscribe(
      (data:any) => {
        console.log(data)
        localStorage.setItem('token', data.result[0].token)
        this.isLoggedIn = true
      },
      error => {
        console.log(error)
      },
      () => {
        this.router.navigate(['/Signup'])
      }
    )
  }*/
}


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent implements OnInit {

  isLoggedIn= false;

  constructor( private authService:AuthService, private router:Router, ) { }

  ngOnInit(): void {
  }

  
  login(form:NgForm){
    this.authService.login({email : form.value.email, password: form.value.password}).subscribe(
      (data:any) => {
        console.log(data)
      },
      error => {
        console.log(error)
      },
      () => {
        this.router.navigate(['/FileActualite'])
      }
    )
  }

}

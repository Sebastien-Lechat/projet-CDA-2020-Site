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


  constructor( private authService:AuthService, private router:Router, ) { }

  ngOnInit(): void {
  }
  isLoggedIn= false;
  login(form:NgForm){
    this.authService.login({Email : form.value.Email, Password: form.value.Password}).subscribe(
      (data:any) => {
        console.log(data)
        localStorage.setItem('token', data.result[0].token)
        this.isLoggedIn = true
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

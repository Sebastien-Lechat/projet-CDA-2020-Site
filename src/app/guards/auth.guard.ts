import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PageConnexionComponent } from '../page-connexion/page-connexion.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
     const currentUser = this.authService.isLoggedIn
    //const currentUser = true

    if(currentUser){
      console.log("Authorized")
      return true;
    }

    this.router.navigate(['/signin'])
    return false;
  }
  
}

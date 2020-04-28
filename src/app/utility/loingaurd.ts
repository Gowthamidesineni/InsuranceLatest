import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class LoginGuard implements CanActivate,CanActivateChild{
    constructor(private authService:AuthService,private router:Router){

    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggednIn()) {
            return true;
          } else {
            this.router.navigate(['/Login']);
            return false;
          }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggednIn()) {
            return true;
          } else {
            this.router.navigate(['/Login']);
            return false;
          }
  }

}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, map } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
    //   return this.authservice.user.pipe(
    //     take(1),
    //     map(user => {
    //       // return user ? true : false;
    //       if (user) {
    //         return true
    //       }
    //       return this.route.createUrlTree([''])
    //     })
    //   )
    //   // return false;
    // }

  }
}
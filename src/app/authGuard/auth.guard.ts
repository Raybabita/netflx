import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take, map } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { Amplify, Auth } from 'aws-amplify';
import { authUser } from '../Model/awsuserauth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // return Auth.currentUserInfo().then((res) => {
    //   if (res) {
    //     console.log("from auth guard", res)
    //     return true;
    //   } else {
    //     return this.route.createUrlTree([''])
    //   }
    // })

    return Auth.currentAuthenticatedUser().then((res) => {
      if (res) {
        return true
      } else {
        return this.route.createUrlTree([''])
      }
    });


    // return this.authservice.user.pipe(
    //   take(1),
    //   map(user => {
    //     // return user ? true : false;
    //     if (user) {
    //       return true
    //     }
    //     return this.route.createUrlTree([''])
    //   })
    // )




    // return false;
  }

}

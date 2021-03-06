import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //canActivate(
    //route: ActivatedRouteSnapshot,
   // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   // return true;
 // }
  
//}

  constructor(private _auth:AuthService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/books'])
      return false

    }
  }
}

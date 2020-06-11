import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthenticationHttpService } from '../../data-access/http/authentication-http.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authHttp: AuthenticationHttpService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authHttp.authenticatedData().pipe(
      map(data => true),
      catchError(error => {
        this.router.navigate(['login']);
        return throwError(error);
      })
    );
  }
}

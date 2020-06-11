import { Inject, Injectable } from '@angular/core';
import { AuthData } from '../../utility/response/auth-data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authData: Observable<AuthData>;
  public authDataSubject$: BehaviorSubject<AuthData>;
  auth: AuthData = null;

  constructor() {
    this.authDataSubject$ = new BehaviorSubject<AuthData>(null);
  }

  public authenticated(authData: AuthData) {
    this.authDataSubject$.next(authData);
  }
}

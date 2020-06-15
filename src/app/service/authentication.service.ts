import { Injectable } from '@angular/core';
import { AuthData } from '../utility/response/auth-data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authDataSubject$: BehaviorSubject<AuthData>;

  constructor() {
    this.authDataSubject$ = new BehaviorSubject<AuthData>(null);
  }

  public authenticated(authData: AuthData) {
    this.authDataSubject$.next(authData);
  }
}

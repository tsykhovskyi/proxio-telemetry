import { Component, Input, OnInit } from '@angular/core';
import { AuthData } from '../../utility/response/auth-data';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../data-access/service/authentication.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() domain: string;
  authData$: Observable<AuthData>;

  constructor(private authentication: AuthenticationService) {
    this.authData$ = authentication.authDataSubject$.pipe(share());
  }

  ngOnInit(): void {}
}

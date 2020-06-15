import { Component, OnInit } from '@angular/core';
import { AuthenticationHttpService } from './data-access/http/authentication-http.service';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'telemetry';

  constructor(private authHttp: AuthenticationHttpService, private authentication: AuthenticationService) {}

  ngOnInit() {
    this.authHttp
      .authenticatedData()
      .pipe(tap(data => this.authentication.authenticated(data)))
      .subscribe();
  }
}

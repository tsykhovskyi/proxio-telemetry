import { Component, Input, OnInit } from '@angular/core';
import { AuthData } from '../../utility/response/auth-data';
import { AuthenticationHttpService } from '../../data-access/authentication-http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() domain: string;
  @Input() authData: AuthData = null;

  constructor(private authHttp: AuthenticationHttpService) {}

  ngOnInit(): void {}

  login() {
    this.authHttp.test().subscribe();
  }
}

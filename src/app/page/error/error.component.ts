import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorTitle: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.paramMap.get('message');

    const code = this.route.snapshot.paramMap.get('code');
    switch (code) {
      case '404':
        this.errorTitle = '404 Page Not Found';
        break;
      case '403':
        this.errorTitle = '403 Forbidden';
        break;
      default:
        this.errorTitle = 'Error';
    }
  }
}

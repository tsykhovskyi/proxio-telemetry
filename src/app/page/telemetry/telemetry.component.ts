import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpMessageModel } from '../../utility/response/http-message.model';
import { TrafficService } from '../../service/traffic.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelemetryComponent implements OnInit {
  domain: string;
  messages$: Observable<HttpMessageModel[]>;

  activeMessage: HttpMessageModel = null;

  constructor(private traffic: TrafficService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.messages$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.domain = params.get('domain');
        return this.traffic.getTraffic(this.domain).pipe(
          catchError(err => {
            console.log('err');
            this.router.navigate(['/error', '403'], { skipLocationChange: true });
            return of(null);
          })
        );
      })
    );
  }

  selectedMessage(message: HttpMessageModel) {
    if (this.activeMessage === message) {
      this.activeMessage = null;
    } else {
      this.activeMessage = message;
    }
  }
}

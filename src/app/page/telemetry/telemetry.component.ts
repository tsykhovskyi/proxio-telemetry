import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpMessageModel } from '../../utility/response/http-message.model';
import { TrafficService } from '../../data-access/traffic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelemetryComponent implements OnInit {
  messages$: Observable<HttpMessageModel[]>;

  activeMessage: HttpMessageModel = null;

  constructor(private traffic: TrafficService) {}

  ngOnInit(): void {
    this.messages$ = this.traffic.getTraffic();

    this.messages$.subscribe(data => {
      console.log(data);
    });
  }
}

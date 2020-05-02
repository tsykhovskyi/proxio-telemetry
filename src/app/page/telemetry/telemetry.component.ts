import { Component, OnInit } from '@angular/core';
import { TrafficHttpService } from '../../data-access/traffic-http.service';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss']
})
export class TelemetryComponent implements OnInit {
  data: any;

  constructor(private trafficHttp: TrafficHttpService) {}

  ngOnInit(): void {
    this.trafficHttp.getTraffic().subscribe(data => (this.data = data));
  }
}

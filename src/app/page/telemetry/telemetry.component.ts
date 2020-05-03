import { Component, OnInit } from '@angular/core';
import { TrafficHttpService } from '../../data-access/traffic-http.service';
import { HttpMessageModel } from '../../utility/model/http-message.model';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss']
})
export class TelemetryComponent implements OnInit {
  traffic: HttpMessageModel[];
  activeMessage: HttpMessageModel = null;

  constructor(private trafficHttp: TrafficHttpService) {}

  ngOnInit(): void {
    this.trafficHttp.getTraffic().subscribe(data => (this.traffic = data));
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpMessageModel } from '../utility/response/http-message.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrafficWsService {
  constructor(private route: ActivatedRoute) {}

  public subscribeOnTraffic(domain: string): Observable<HttpMessageModel> {
    const subject = new Subject<HttpMessageModel>();

    const token = this.route.snapshot.queryParamMap.get('token');
    const ws = new WebSocket('ws://ui.proxio.rd/api/ws?domain=' + domain + '&token=' + token);

    ws.onmessage = event => {
      const data = event.data;
      const message = JSON.parse(data);
      subject.next(message);
    };

    return subject;
  }
}

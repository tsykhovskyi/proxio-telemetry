import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpMessageModel } from '../utility/response/http-message.model';

@Injectable({
  providedIn: 'root'
})
export class TrafficWsService {
  public subscribeOnTraffic(): Observable<HttpMessageModel> {
    const subject = new Subject<HttpMessageModel>();

    const ws = new WebSocket('ws://ui.proxio.rd/ws');

    ws.onmessage = event => {
      const data = event.data;
      const message = JSON.parse(data);
      subject.next(message);
    };

    return subject;
  }
}

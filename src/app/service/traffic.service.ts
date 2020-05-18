import { Injectable } from '@angular/core';
import { TrafficHttpService } from '../data-access/traffic-http.service';
import { TrafficWsService } from '../data-access/traffic-ws.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpMessageModel } from '../utility/response/http-message.model';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {
  private readonly messages$: Subject<HttpMessageModel[]>;
  private messages: HttpMessageModel[];

  constructor(private trafficHttp: TrafficHttpService, private trafficWs: TrafficWsService) {
    this.messages = [];
    this.messages$ = new BehaviorSubject<HttpMessageModel[]>(this.messages);
  }

  getTraffic(domain: string) {
    console.log('listening for ' + domain);
    this.trafficHttp.getTraffic(domain).subscribe(data => {
      this.messages = data;
      this.emit();
    });
    this.trafficWs.subscribeOnTraffic(domain).subscribe(data => this.handleNewMessage(data));

    return this.messages$;
  }

  private handleNewMessage(message: HttpMessageModel) {
    const len = this.messages.length;
    if (len > 0 && this.messages[len - 1].Id === message.Id) {
      this.messages.pop();
    }

    this.messages.push(message);
    this.emit();
  }

  private emit() {
    const sorted = this.messages.concat().sort((a, b) => b.Time.StartedAt.localeCompare(a.Time.StartedAt));
    this.messages$.next(sorted);
  }
}

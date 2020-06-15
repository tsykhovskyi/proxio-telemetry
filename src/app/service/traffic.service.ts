import { Injectable } from '@angular/core';
import { TrafficHttpService } from '../data-access/http/traffic-http.service';
import { TrafficWsService } from '../data-access/http/traffic-ws.service';
import { BehaviorSubject, of, Subject, throwError } from 'rxjs';
import { HttpMessageModel } from '../utility/response/http-message.model';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {
  private readonly messages$: BehaviorSubject<HttpMessageModel[]>;

  constructor(private trafficHttp: TrafficHttpService, private trafficWs: TrafficWsService, private router: Router) {
    this.messages$ = new BehaviorSubject<HttpMessageModel[]>([]);
  }

  getTraffic(domain: string) {
    this.trafficHttp
      .getTraffic(domain)
      .pipe(
        tap(data => {
          this.newMessageCollection(data);
        }),
        catchError(err => this.errorHandling(err))
      )
      .subscribe();
    this.trafficWs
      .subscribeOnTraffic(domain)
      .pipe(
        tap(data => this.handleNewMessage(data)),
        catchError(err => this.errorHandling(err))
      )
      .subscribe();

    return this.messages$;
  }

  /**
   * Update or add by ID new HTTP message to collection
   */
  private handleNewMessage(message: HttpMessageModel) {
    const messages = this.messages$.value;
    if (messages.length > 0 && messages[0].Id === message.Id) {
      messages.shift();
    }
    messages.unshift(message);
    this.newMessageCollection(messages);
  }

  /**
   * Filter messages by StartedAt timestamp desc(newest first)
   */
  private newMessageCollection(messages: HttpMessageModel[]) {
    const sorted = messages.concat().sort((a, b) => b.Time.StartedAt.localeCompare(a.Time.StartedAt));
    this.messages$.next(sorted);
  }

  /**
   * Redirect to related error page
   */
  private errorHandling(err: HttpErrorResponse) {
    return this.router.navigate(['/error', err.status]);
  }
}

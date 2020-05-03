import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMessageModel } from '../utility/model/http-message.model';

@Injectable({
  providedIn: 'root'
})
export class TrafficHttpService {
  private readonly apiHost: string;

  constructor(private http: HttpClient) {
    // this.apiHost = 'http://ui.localhost:80';
    this.apiHost = '';
  }

  public getTraffic(): Observable<HttpMessageModel[]> {
    // @ts-ignore
    return this.http.get(this.apiHost + '/m');
  }
}

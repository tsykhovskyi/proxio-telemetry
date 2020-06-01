import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMessageModel } from '../utility/response/http-message.model';

@Injectable({
  providedIn: 'root'
})
export class TrafficHttpService {
  constructor(private http: HttpClient) {}

  public getTraffic(domain: string): Observable<HttpMessageModel[]> {
    const params = new HttpParams().set('domain', domain);
    return this.http.get<HttpMessageModel[]>('/api/m', { params });
  }
}

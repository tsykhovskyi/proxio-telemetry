import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrafficHttpService {
  private readonly apiHost: string;

  constructor(private http: HttpClient) {
    // this.apiHost = 'http://ui.localhost:80';
    this.apiHost = '';
  }

  public getTraffic() {
    return this.http.get(this.apiHost + '/m');
  }
}

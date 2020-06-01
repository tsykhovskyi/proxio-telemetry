import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../utility/response/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {
  constructor(private http: HttpClient) {}

  authenticatedData(): Observable<AuthData> {
    return this.http.get<AuthData>('/api/authenticated');
  }

  test(): Observable<any> {
    const headers = new HttpHeaders().append('Authentication', '776');
    return this.http.get<AuthData>('/api/test', { headers });
  }
}

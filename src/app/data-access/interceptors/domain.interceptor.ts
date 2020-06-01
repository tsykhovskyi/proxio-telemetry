import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class DomainInterceptor implements HttpInterceptor {
  constructor(private route: ActivatedRoute) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token !== null) {
      request = request.clone({ setParams: { token } });
    }
    return next.handle(request);
  }
}

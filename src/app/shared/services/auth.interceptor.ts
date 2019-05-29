import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('currentUser');
    request = request.clone({
      url: environment.baseUrl + request.url,
      setHeaders: token 
        ? {
          Authorization: `${token}`
        } 
        : undefined,
    });
    return next.handle(request);
  }
}
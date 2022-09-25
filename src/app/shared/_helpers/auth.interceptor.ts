import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "src/app/login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: LoginService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        if (this.authService.token() != '') {
            request = request.clone({
                headers: request.headers.set('authorization', 'Bearer ' + this.authService.token()),
            });
        }

        return next.handle(request);
    }
}

export const AuthInterceptorProviders = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}
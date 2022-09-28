import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private readonly jwtHelper: JwtHelperService,
  ) { }

  private readonly TOKEN_NAME = 'eqvendas_auth';
  private readonly EMAIL_USER = 'UserEmail';
  private readonly url: string = `http://localhost:3000/api/v1/`;

  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_NAME) || undefined;
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(user: { email: string, password: string }) {
    return this.http.post<any>(`${this.url}login`, user, { withCredentials: false });
  }

  doLoginUser(email: string, tokens: string) {
    this.storeEmailUser(email);
    this.storeTokens(tokens);
  }

  storeTokens(token: string) {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  storeEmailUser(email: string) {
    localStorage.setItem(this.EMAIL_USER, email);
  }

  emailUser() {
    return localStorage.getItem(this.EMAIL_USER) || '';
  }

  logout() {
    alert(`not implemented`);
  }

  token() {
    return localStorage.getItem(this.TOKEN_NAME) || '';
  }

  createNewUser(user: { name: string, email: string, password: string, checkout_id: string }) {
    return this.http.post<any>(`${this.url}user`, user, { withCredentials: false });
  }

}

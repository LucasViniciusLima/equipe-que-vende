import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private readonly url: string = `http://localhost:3000/api/v1/`;

  getUser(email: string) {
    return this.http.get<any>(`${this.url}user/${email}`, { withCredentials: false });
  }

  getUserByCheckoutId(checkout_id: string) {
    return this.http.get<any>(`${this.url}user/checkoutid/${checkout_id}`, { withCredentials: false });
  }

}

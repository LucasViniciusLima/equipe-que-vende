import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/login/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;

  constructor(private http: HttpClient) {
    this.user = { password: '', name: '', email: '', checkout_id: '' };
  }

  private readonly url: string = `http://localhost:3000/api/v1/`;

  getUser(email: string) {
    return this.http.get<any>(`${this.url}user/${email}`, { withCredentials: false });
  }
}

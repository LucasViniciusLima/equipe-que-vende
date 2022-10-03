import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  private readonly url: string = `http://localhost:3000/api/v1/`;

  getUserSales(checkout_id: string) {
    return this.http.get<any>(`${this.url}sale/${checkout_id}`, { withCredentials: false });
  }

  getAllSales() {
    return this.http.get<any>(`${this.url}sale`, { withCredentials: false });
  }
}

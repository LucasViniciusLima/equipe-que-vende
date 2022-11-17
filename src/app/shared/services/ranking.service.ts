import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  private readonly url: string = `https://equipe-que-vende-api.herokuapp.com/api/v1/`;

  getRankingByMonth(date: string) {
    return this.http.get<any>(`${this.url}ranking/${date}`, { withCredentials: false });
  }

  getActualMonthRanking() {
    const date = new Date();
    const dateMonthAndYear = (date.getMonth() + 1) + "-" + date.getFullYear();
    return this.getRankingByMonth(dateMonthAndYear);
  }

}

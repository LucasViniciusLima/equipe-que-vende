import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  private readonly url: string = `http://localhost:3000/api/v1/`;

  getAllMedia() {
    return this.http.get<any>(`${this.url}categoria/`, { withCredentials: false });
  }

}

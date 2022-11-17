import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  static emitCursoCriado = new EventEmitter<any>();

  private readonly url: string = `https://equipe-que-vende-api.herokuapp.com/api/v1/`;

  getAllMedia() {
    return this.http.get<any>(`${this.url}categoria/`, { withCredentials: false });
  }

  createMedia(media: any, categoria: string) {
    MediaService.emitCursoCriado.emit({ categoria, depoimentosFoto: media });
    return this.http.post<any>(`${this.url}depoimentosfoto/${categoria}`, media, { withCredentials: false });
  }

}

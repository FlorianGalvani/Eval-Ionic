import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PiecesOfWorkService {
  private url = environment.apiUrl
  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get(this.url + 'piecesOfWork')
  }
  fetchOneById(id) {
    return this.http.get(this.url + 'piecesOfWork' + `/${id}`)
  }
  fetchFavorite() {
    return this.http.get(this.url + 'favorites')
  }
}

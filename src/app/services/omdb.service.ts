import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie.model';

@Injectable()
export class OmdbService {

  // Подключаем модуль для работы с http
  constructor(
    private http: HttpClient) {
  }

  // Метод для запроса фильма
  getMovie(searchMovie: string): Observable<Movie> {
    const url = `http://www.omdbapi.com/?s=${searchMovie}&t=&apikey=1ce9470d&y=&i=&plot=full&r=json`;
    return this.http.get<Movie>(url);
  }
}

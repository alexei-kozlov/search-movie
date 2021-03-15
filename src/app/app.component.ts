import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {OmdbService} from './services/omdb.service';
import {Movie} from './models/movie.model';
import {Error} from './models/error.model';
import {filter, switchMap, debounceTime, catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OmdbService]
})

export class AppComponent implements OnInit {
  title = 'Search My Movie';
  // Контрол для поиска фильма
  findControl = new FormControl();
  // Ошибка поиска
  error: any = Error;
  // Найденный фильм(-ы)
  movie: any = Movie;
  movies: Movie[] = [];

  // Подключение OMDbService для поиска фильма
  constructor(
    private omdbService: OmdbService) {
  }

  // Хук инициализации компонента
  ngOnInit() {
    this.movies = [];
    this.findControl.valueChanges
      .pipe(
        // Фильтруем если введено меньше двух символов
        filter(value => value.length > 2),

        // Ставим задержку 2 секунды
        debounceTime(2000),

        // Запрашиваем данные пользователя
        switchMap(value =>
          this.omdbService.getMovie(value).pipe(

            // Обработка ошибок
            catchError(err => {
              this.error = err;
              this.movies = [];
              return EMPTY;
            })
          )
        )
      )
      // Получение данных
      .subscribe(movie => {
        this.movies = movie.Search;
        this.error = movie;
      });
  }
}

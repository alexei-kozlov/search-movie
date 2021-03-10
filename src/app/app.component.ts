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
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Search My Movie';
  // Контрол для поиска фильма
  findControl = new FormControl();
  // Ошибка поиска
  error: any = Error;
  // Найденный фильм
  movie: any = Movie;

  // Подключение OMDbService для поиска фильма
  constructor(
    private omdbService: OmdbService) {
  }

  // Прелоадер и иконка поиска
  public preloader: boolean = false;
  Activate() {
    this.preloader = true;
    setTimeout(() => {
      this.preloader = false;
    }, 3000);
  }

  // Хук инициализации компонента
  ngOnInit() {
    this.preloader = false;
    this.movie = null;
    this.error = null;
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
            catchError(error => {
              this.movie = error;
              return EMPTY;
            })
          )
        )
      )
      // Получение данных
      .subscribe(movie => {
        this.movie = movie;
        this.error = movie;
      });
  }
}

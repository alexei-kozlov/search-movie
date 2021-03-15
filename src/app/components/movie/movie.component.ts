import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MovieComponent {
  @Input()
  movie: any = Movie;
  movies: Movie[] = [];
}

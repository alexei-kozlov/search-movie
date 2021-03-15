import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // Задаем начальные значения иконкам loader/search
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public noLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }
}

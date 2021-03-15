import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Подключаем модуль для работы с сервисом 'Loader'
  constructor(
    public loaderService: LoaderService) {
  }

  ngOnInit() {
  }
}

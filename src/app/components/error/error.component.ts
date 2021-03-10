import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Error } from '../../models/error.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ErrorComponent {
  @Input()
  error!: Error;
}

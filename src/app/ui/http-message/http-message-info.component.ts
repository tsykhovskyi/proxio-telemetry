import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HttpMessageModel } from '../../utility/response/http-message.model';

@Component({
  selector: 'app-http-message-info',
  templateUrl: './http-message-info.component.html',
  styleUrls: ['./http-message-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpMessageInfoComponent implements OnInit {
  @Input() message: HttpMessageModel;

  constructor() {}

  ngOnInit(): void {}
}

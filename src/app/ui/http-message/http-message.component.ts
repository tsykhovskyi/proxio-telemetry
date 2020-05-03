import { Component, Input, OnInit } from '@angular/core';
import { HttpMessageModel } from '../../utility/response/http-message.model';

@Component({
  selector: 'app-http-message-info',
  templateUrl: './http-message.component.html',
  styleUrls: ['./http-message.component.scss']
})
export class HttpMessageComponent implements OnInit {
  @Input() message: HttpMessageModel;

  constructor() {}

  ngOnInit(): void {}
}

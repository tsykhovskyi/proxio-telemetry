import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpMessageModel } from '../../utility/model/http-message.model';

@Component({
  selector: 'app-http-message-list',
  templateUrl: './http-message-list.component.html',
  styleUrls: ['./http-message-list.component.scss']
})
export class HttpMessageListComponent implements OnInit {
  activeMessage: HttpMessageModel = null;

  @Input() messages: HttpMessageModel[];
  @Output() selected = new EventEmitter<HttpMessageModel>();

  constructor() {}

  ngOnInit(): void {}

  onClick(message: HttpMessageModel) {
    console.log(message);
    this.selected.emit(message);
  }
}

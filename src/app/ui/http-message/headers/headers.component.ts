import { Component, Input, OnInit } from '@angular/core';
import { Headers } from '../../../utility/model/http-message.model';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  @Input() headers: Headers;

  constructor() {}

  ngOnInit(): void {}
}

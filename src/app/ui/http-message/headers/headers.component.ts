import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Headers } from '../../../utility/response/http-message.model';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadersComponent implements OnInit {
  @Input() headers: Headers;

  constructor() {}

  ngOnInit(): void {}
}

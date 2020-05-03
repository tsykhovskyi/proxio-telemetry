import { Component, Input, OnInit } from '@angular/core';
import { Headers } from '../../../utility/response/http-message.model';
import { ContentGuesserUtility, ContentType } from '../../../utility/content-guesser.utility';

@Component({
  selector: 'app-prettier',
  templateUrl: './prettier.component.html',
  styleUrls: ['./prettier.component.scss']
})
export class PrettierComponent {
  ContentType = ContentType;
  contentType: ContentType = ContentType.Undefined;

  @Input() body: string;

  @Input()
  set headers(headers: Headers) {
    this.contentType = ContentGuesserUtility.guess(headers);
  }
}

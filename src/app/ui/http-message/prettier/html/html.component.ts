import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlComponent {
  @Input() content: string;
}

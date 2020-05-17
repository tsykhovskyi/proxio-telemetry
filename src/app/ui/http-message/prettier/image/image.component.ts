import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  src: string;

  @Input()
  set content(content: string) {
    this.src = 'data:image/jpeg;base64,' + content;
  }
}

import { Component, Input } from '@angular/core';
import { JsonIterator, JsonRow } from '../../../../utility/render/json-renderer.utility';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent {
  jsonRows: JsonRow[];

  filterQuery: string = '';
  collapsedPaths: string[] = [];

  @Input()
  set content(content: string) {
    this.jsonRows = [...new JsonIterator(JSON.parse(content))];
  }

  toogleExpanded(path: string) {
    const childrenPath = path + '/';

    const foundI = this.collapsedPaths.findIndex(collapsed => collapsed === childrenPath);
    if (foundI === -1) {
      this.collapsedPaths.push(childrenPath);
    } else {
      this.collapsedPaths.splice(foundI, 1);
    }
    this.collapsedPaths = [...this.collapsedPaths];
  }

  expandAll() {
    this.collapsedPaths = [];
  }

  collapseAll() {
    this.collapsedPaths = this.jsonRows.filter(row => row.value === undefined).map(row => row.path + '/');
  }
}

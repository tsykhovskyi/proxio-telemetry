import { Pipe, PipeTransform } from '@angular/core';
import { JsonRow } from './json-renderer.utility';

export interface ExpandableRow {
  expanded: boolean;
}

@Pipe({ name: 'expandedNodes' })
export class ExpandedNodesPipe implements PipeTransform {
  transform(rows: JsonRow[], collapsedPaths: string[]): Array<JsonRow | ExpandableRow> {
    return rows
      .map(row => ({ ...row, expanded: collapsedPaths.findIndex(v => row.path + '/' === v) === -1 }))
      .filter(row => {
        for (const collapsedPath of collapsedPaths) {
          if (row.path.startsWith(collapsedPath)) {
            return false;
          }
        }
        return true;
      });
  }
}

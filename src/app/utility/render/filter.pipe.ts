import { Pipe, PipeTransform } from '@angular/core';
import { JsonRow } from './json-renderer.utility';

@Pipe({ name: 'jsonFilter' })
export class JsonFilterPipe implements PipeTransform {
  transform(rows: JsonRow[], query: string): JsonRow[] {
    if (query === '') {
      return rows;
    }

    const matchedPaths: object = {};
    for (const row of rows) {
      const pathParts = row.path.split('/');
      if (
        pathParts[pathParts.length - 1].includes(query) ||
        (row.value !== undefined && row.value.toString().includes(query))
      ) {
        const implodeParts = [];
        for (let part of pathParts) {
          implodeParts.push(part);
          matchedPaths[implodeParts.join('/')] = true;
        }
      }
    }

    return rows.filter(row => matchedPaths[row.path] !== undefined);
  }
}

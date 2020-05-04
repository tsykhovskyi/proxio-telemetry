import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent {
  json: JsonIterator;

  @Input()
  set content(content: string) {
    this.json = new JsonIterator(JSON.parse(content));
  }
}

class JsonRow {
  key: string;
  value: string;
  depth: number;
}

class JsonIterator implements IterableIterator<JsonRow> {
  private readonly initValue: any;
  private objStack: [any, number, number][] = [];

  constructor(json: any) {
    this.initValue = json;
    this.objStack.push([this.initValue, 0, 0]);
  }

  next(): IteratorResult<JsonRow, any> {
    if (this.objStack.length === 0) {
      this.objStack.push([this.initValue, 0, 0]);
      return {
        done: true,
        value: null
      };
    }

    let [obj, iterator, depth] = this.objStack.pop();

    let row: JsonRow;
    if (Array.isArray(obj)) {
      row = this.processArray(obj, iterator, depth);
    } else if (typeof obj === 'object') {
      row = this.processObject(obj, iterator, depth);
    } else {
      throw Error('something wrong');
    }
    return {
      done: false,
      value: row
    };
  }

  processArray(arr: Array<any>, iterator: number, depth: number) {
    if (iterator < arr.length - 1) {
      this.objStack.push([arr, iterator + 1, depth]);
    }

    const row = { key: iterator.toString(), depth } as JsonRow;
    if (typeof arr[iterator] === 'object') {
      this.objStack.push([arr[iterator], 0, depth + 1]);
    } else {
      row.value = arr[iterator];
    }

    return row;
  }

  processObject(obj: any, iterator: number, depth: number) {
    const properties = Object.getOwnPropertyNames(obj);

    if (iterator < properties.length - 1) {
      this.objStack.push([obj, iterator + 1, depth]);
    }

    const row = { key: properties[iterator], depth } as JsonRow;
    if (typeof obj[properties[iterator]] === 'object') {
      this.objStack.push([obj[properties[iterator]], 0, depth + 1]);
    } else {
      row.value = obj[properties[iterator]];
    }

    return row;
  }

  [Symbol.iterator](): IterableIterator<JsonRow> {
    return this;
  }
}

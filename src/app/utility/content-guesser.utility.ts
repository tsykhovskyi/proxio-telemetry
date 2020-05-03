import { Headers } from './response/http-message.model';

export enum ContentType {
  Undefined,
  HTML,
  JSON,
  Image
}

export class ContentGuesserUtility {
  static guess(headers: Headers): ContentType {
    if ('object' === typeof headers['Content-Type']) {
      let type = headers['Content-Type'][0],
        rHtml = /text\/html/,
        rJson = /application\/json/,
        rImage = /image\/.+/;
      if (rHtml.test(type)) {
        return ContentType.HTML;
      }
      if (rJson.test(type)) {
        return ContentType.JSON;
      }
      if (rImage.test(type)) {
        return ContentType.Image;
      }
    }
    return ContentType.Undefined;
  }
}

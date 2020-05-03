export interface HttpMessageModel {
  Id: number;
  Request: HttpRequestModel;
  Response: HttpResponseModel;
  Status: number;
  Time: HttpTimestamps;
}

export interface HttpRequestModel {
  Method: string;
  URI: string;
  Body: string;
  Headers: Headers;
}

export interface HttpResponseModel {
  Body: string;
  Code: number;
  Headers: Headers;
}

export interface HttpTimestamps {
  StartedAt: string;
  FinishedAt: string;
  TimeTaken: number; // seconds
}

export interface Headers {
  [key: string]: string;
}

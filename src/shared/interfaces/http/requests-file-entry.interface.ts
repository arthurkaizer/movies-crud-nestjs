import { ResponseFromApp } from 'src/shared/types/response-from-app.type';
import { LoggedRequestI } from './logged-request.interface';

export interface RequestsFileEntryI {
  request: LoggedRequestI;
  response: ResponseFromApp;
}

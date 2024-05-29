import { RequestMethod } from '@nestjs/common';
import { REQUEST_ID_TOKEN_HEADER } from 'src/shared/constants/general.constant';
import { DynamicObjectI } from 'src/shared/interfaces/general/dynamic-object.interface';
import { LoggedRequestI } from 'src/shared/interfaces/http/logged-request.interface';
import { RequestI } from 'src/shared/interfaces/http/request.interface';

export const requestMapper = (request: RequestI) => {
  const { params, path, query, headers, body, method } = request;

  const mappedRequest: LoggedRequestI = {
    path,
    body,
    token: (headers.authorization ?? 'Bearer ').split(' ')[1],
    lang: headers['accept-language'] ?? 'en',
    id: headers[REQUEST_ID_TOKEN_HEADER]! + '',
    queryParams: query,
    routeParams: params,
    method: (RequestMethod as DynamicObjectI)[method],
  };

  return mappedRequest;
};

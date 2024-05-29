import { ResponseFromInterceptorI } from 'src/shared/interfaces/general/response-from-interceptor.interface';
import { ResponseFromServiceI } from 'src/shared/interfaces/general/response-from-service.interface';

export type ResponseFromApp = ResponseFromInterceptorI & ResponseFromServiceI;

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { RequestsLoggerService } from 'src/core/lib/logger/requests-logger.service';
import { map, Observable } from 'rxjs';
import { RequestI } from 'src/shared/interfaces/http/request.interface';
import { ResponseFromApp } from 'src/shared/types/response-from-app.type';
import { requestMapper } from 'src/shared/util/request-mapper.util';

@Injectable()
export class LoggingInterceptor
  implements NestInterceptor<ResponseFromApp, ResponseFromApp>
{
  constructor(private readonly requestsLoggerService: RequestsLoggerService) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<ResponseFromApp>,
  ): Observable<ResponseFromApp> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<RequestI>();
    const then = Date.now();

    return next.handle().pipe(
      map((responseFromApp) => {
        const MS_TO_S = 1000;
        const requestDuration = (Date.now() - then) / MS_TO_S;
        const loggedRequest = requestMapper(request);
        responseFromApp.requestDuration = requestDuration;

        this.requestsLoggerService.logRequest(loggedRequest, responseFromApp);

        return responseFromApp;
      }),
    );
  }
}

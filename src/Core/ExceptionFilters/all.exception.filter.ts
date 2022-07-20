import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { LoggerService } from 'src/Core/Logger/logger.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private logger: LoggerService,
  ) {
    this.logger.setContext('AllExceptionsFilter');
    this.logger.log('AllExceptionsFilter created');
  }

  catch(exception: unknown, host: ArgumentsHost): void {
    this.logger.error(exception);
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const httpMeessage =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';
    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message: httpMeessage,
    };
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}

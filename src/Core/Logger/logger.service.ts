import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  error(message: any, stack?: string, context?: string) {
    super.error(message, stack, context);
  }
  customErrorLog(message: any, stack?: string, context?: string) {
    //any custom logic goes here
    this.error(message, stack, context);
  }
}

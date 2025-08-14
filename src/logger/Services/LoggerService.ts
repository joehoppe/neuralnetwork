import { LogLevelEnum } from '../Models/LogLevelEnum';

export class LoggerService {
  private static instance: LoggerService;

  private constructor(private logLevel: LogLevelEnum = LogLevelEnum.WARN) {}

  static getInstance(
    logLevel?: LogLevelEnum,
  ): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService(logLevel ?? LogLevelEnum.WARN);
    } else if (logLevel !== undefined) {
      LoggerService.instance.logLevel = logLevel;
    }

    return LoggerService.instance;
  }

  getLogLevel(newLogLevel?: LogLevelEnum): LogLevelEnum {
    if (newLogLevel !== undefined) {
      this.logLevel = newLogLevel;
    }
    return this.logLevel;
  }

  debug(message?: any, ...optionalParams: any[]) {
    if (this.logLevel === LogLevelEnum.DEBUG) {
      console.debug(message, optionalParams);
    }
  }

  info(message?: any, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevelEnum.INFO) {
      console.info(message, optionalParams);
    }
  }

  log(message?: any, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevelEnum.LOG) {
      console.log(message, optionalParams);
    }
  }

  warn(message?: any, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevelEnum.WARN) {
      console.warn(message, optionalParams);
    }
  }

  error(message: string, ...optionalParams: any[]) {
    if (this.logLevel <= LogLevelEnum.ERROR) {
      console.error(message, optionalParams);
    }
  }
}

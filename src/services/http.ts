import { ILogger } from './logger';

import type { IApiConfig, User } from '../types';

export interface IHTTP {
  get (url: string): void
}

export class HTTP implements IHTTP {
  private logger: ILogger;
  private apiConfig: IApiConfig;

  static $inject = ['apiConfig', 'logger'];

  constructor(apiConfig: IApiConfig, logger: ILogger) {
    this.apiConfig = apiConfig;
    this.logger = logger;
  }

  async get(url: string) {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}

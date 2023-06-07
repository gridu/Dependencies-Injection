import type { ILogger, IApiConfig } from '../types';
export class HTTP {
  logger: ILogger;
  apiConfig: IApiConfig;

  static $inject = ['logger', 'apiConfig'];

  constructor(logger: ILogger, apiConfig: IApiConfig) {
    this.logger = logger;
    this.apiConfig = apiConfig;
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

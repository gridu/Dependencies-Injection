import type { ApiConfig, ILogger } from '../types';
export class HTTP {
  apiConfig: ApiConfig;
  logger: ILogger;

  static $singleton = true;
  static $inject = ['apiConfig', 'logger'];

  constructor(apiConfig: ApiConfig, logger: ILogger) {
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

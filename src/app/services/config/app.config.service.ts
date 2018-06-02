import { AppConfig } from './app.config';
import { IAppConfigService } from './iapp.config.service';
import { injectable } from 'inversify';

@injectable()
export class AppConfigService implements IAppConfigService {
    env = process.env;
    environment(): string {
        return this.env.ENVIRONMENT || AppConfig.environment;
    }
}
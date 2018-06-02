import { injectable } from 'inversify';
import { About } from '../model/about.model';
import { IAboutService } from './iabout.service';
import { IAppConfigService } from './config/iapp.config.service';

// AboutService is implementation of IAboutService
@injectable()
export class AboutService implements IAboutService {

    constructor(private appConfigService: IAppConfigService){}

    get(): About[] {
        return [new About()];
    }

    environment(): string {
        return this.appConfigService.environment();
    }
}
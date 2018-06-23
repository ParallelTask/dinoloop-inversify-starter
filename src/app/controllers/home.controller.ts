import { injectable } from 'inversify';
import { ApiController, Controller, HttpGet, SendsResponse, Async } from 'dinoloop';
import { IAboutService } from '../services/iabout.service';
import { About } from '../model/about.model';
import { IAppConfigService } from '../services/config/iapp.config.service';

@injectable()
@Controller('/home')
export class HomeController extends ApiController {
    name: string;

    constructor(private aboutService: IAboutService) {
            super();
            this.name = 'HomeController';
    }

    @HttpGet('/get')
    get(): string {
        return 'Hello World!';
    }

    @HttpGet('/name')
    getName(): string {
        return this.name;
    }

    @HttpGet('/environment')
    environment(): string {
        return this.aboutService.environment();
    }

    @HttpGet('/about')
    getAbout(): About[] {
        return this.aboutService.get();
    }

    @SendsResponse()
    @HttpGet('/about/:id')
    getId(id: string): void {
        setTimeout(() => {
            this.dino.proceed(`Value of id is ${id}`);
        }, 100);
    }
}

import { Mock } from 'moq.ts';
import { IAppConfigService } from '../../../src/app/services/config/iapp.config.service';
import { AboutService } from '../../../src/app/services/about.service';
import { About } from '../../../src/app/model/about.model';

describe('services.about.service.spec', () => {
    it('get.returns_array_of_about_entity', () => {
        let mockAppConfig = new Mock<IAppConfigService>();
        let cut = new AboutService(mockAppConfig.object());
        let result = cut.get();

        expect(result).toEqual([new About()]);
    });
});
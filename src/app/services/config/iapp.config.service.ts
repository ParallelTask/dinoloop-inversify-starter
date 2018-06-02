import { injectable } from 'inversify';

@injectable()
export abstract class IAppConfigService {
    abstract environment(): string;
}
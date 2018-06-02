import { injectable } from 'inversify';
import { About } from '../model/about.model';

// IAboutService acts as Interface
@injectable()
export abstract class IAboutService {
    abstract get(): About[];
    abstract environment(): string;
}
import { injectable } from 'inversify';
import { ErrorController } from 'dinoloop';

@injectable()
export class ApplicationErrorController extends ErrorController {
    internalServerError(): void {
        this.response.json({
            message: 'Internal server error 500!',
            errorMessage: this.error.message,
            errorStack: this.error.stack
        });
    }
}
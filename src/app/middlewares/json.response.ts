import { injectable } from 'inversify';
import { RequestStartMiddleware, RequestEndMiddleware } from 'dinoloop';
import { Request, Response, NextFunction } from 'express';

@injectable()
export class JsonResponse extends RequestEndMiddleware {
    invoke(request: Request, response: Response, next: NextFunction, result: any): void {
        response.json({
            status: 'SUCCESS',
            result: result
        });
    }
}
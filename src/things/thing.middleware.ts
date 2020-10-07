import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ThingMiddleware implements NestMiddleware {
    // eslint-disable-next-line @typescript-eslint/ban-types
    use(req: Request, res: Response, next: Function) {
        console.log(`This is the request params: ${req.params}`);
        next();
    }
}
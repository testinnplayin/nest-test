import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ThingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: any) {
        console.log(`This is the request params: ${JSON.stringify(req.params)}`);
        next();
    }
}
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Body: ' + JSON.stringify(req.body));
    console.log('IP: ' + req.ip);
    next();
  }
}

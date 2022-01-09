import { Controller, Get, Next, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';
import { parse } from 'url';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  public async assets(@Req() request: Request, @Res() response: Response, @Next() next) {
    if (request.path === '/graphql') {
      next();
    }
    const parsedUrl = parse(request.url, true);
    await this.appService.getNextServer().render(request, response, parsedUrl.pathname, parsedUrl.query);
  }
}

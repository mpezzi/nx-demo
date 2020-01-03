import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  public index(@Res() res) {
    res.redirect('/apple/');
  }

}

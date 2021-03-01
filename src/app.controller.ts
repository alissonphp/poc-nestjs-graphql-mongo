import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get('/health')
  health(): Record<string, string> {
    return {
      health: 'all ok in this service'
    }
  }
}

import { Controller, Get } from '@nestjs/common';
import * as os from 'os';

@Controller()
export class AppController {
  @Get()
  getHostStatus() {
    return {
      status: 'Running 🚀',
      host: os.hostname(),
      version: os.version() + '-' + os.arch(),
    };
  }
}

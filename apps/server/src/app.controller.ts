import { Controller, Get } from '@nestjs/common';
import type { User } from '@ai-workspace/shared';

@Controller()
export class AppController {

  @Get('health')
  getHealth(): User {
    return {
      id: '1',
      username: 'JohnDoe',
      email: '984387070@qq.com',
    };
  }
}

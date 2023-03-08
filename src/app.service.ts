import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    const message = 'Health OK';
    const version = '0.0.2';

    return { message, version };
  }
}

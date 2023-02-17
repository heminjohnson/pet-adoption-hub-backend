import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return { message: 'Health OK', version: process.env.npm_package_version };
  }
}

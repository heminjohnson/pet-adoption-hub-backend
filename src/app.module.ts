import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PetsController } from './pets/pets.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, PetsController],
  providers: [AppService],
})
export class AppModule {}

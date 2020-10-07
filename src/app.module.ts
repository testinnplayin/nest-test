import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsController } from './things/things.controller';
import { ThingMiddleware } from './things/thing.middleware';
import { ThingsService } from './things/things.service';

@Module({
  imports: [],
  controllers: [AppController, ThingsController],
  providers: [AppService, ThingsService],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    await consumer.apply(ThingMiddleware).forRoutes(ThingsController);
  }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ThingMiddleware } from './thing.middleware';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';
import { Thing } from './thing.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Thing])],
    providers: [ThingsService],
    controllers: [ThingsController],
    exports: [ThingsService, TypeOrmModule]
})

export class ThingsApiModule implements NestModule {
    async configure(consumer: MiddlewareConsumer) {
        await consumer.apply(ThingMiddleware).forRoutes(ThingsController);
    }
}
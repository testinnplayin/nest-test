import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Thing } from "./things/thing.entity";
import { ThingsApiModule } from './things/things-api.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      name: "nestMongo",
      host: "localhost",
      port: 27017,
      database: "nest-test",
      useUnifiedTopology: true,
      useNewUrlParser: true,
      entities: [Thing],
    }),
    ThingsApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

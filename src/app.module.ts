import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SchemasApiModule } from './schemas/schema-api.module'

import { Thing } from "./things/thing.entity";
import { ThingsApiModule } from './things/things-api.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: 'mongodb://127.0.0.1:27017/nest-test',
      useUnifiedTopology: true,
      useNewUrlParser: true,
      entities: [Thing],
      synchronize: true,
    }),
    SchemasApiModule,
    ThingsApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { SchemaService } from './schema.service';
import { SchemasController } from './schemas.controller';

@Module({
    providers: [SchemaService],
    controllers: [SchemasController],
})
export class SchemasApiModule {}
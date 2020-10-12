import { Controller, Get, Param } from '@nestjs/common';

import { SchemaService } from './schema.service';


@Controller('schemas')
export class SchemasController {
    constructor(private schemaService: SchemaService) {}

    @Get(':schemaType')
    getSchema(@Param('schemaType') schemaType: string) {
        return this.schemaService.fetchSchema(schemaType);
    }
}
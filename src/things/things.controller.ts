import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';

import { ThingDto } from './create.dto';
import { Thing } from './thing.entity';
import { ThingsService } from './things.service';
import { ValidateSchema } from '../validation.pipe';


@Controller('things')
export class ThingsController {
    constructor(private thingsService: ThingsService) {}

    @Get()
    async getThings(): Promise<Thing[]> {
        return await this.thingsService.getThings();
    }

    @Get(':name')
    getThing(@Param('name') name: string): Promise<Thing> {
        return this.thingsService.getThing(name);
    }

    @Post()
    @UsePipes(new ValidateSchema(ThingDto._schema))
    async createThing(@Body() createThingDto: ThingDto) {
        this.thingsService.createThing(createThingDto);
        return 'Thing created.';
    }
}

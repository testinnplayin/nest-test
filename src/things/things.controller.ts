import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
    async createThing(@Body(new ValidateSchema()) createThingDto: ThingDto) {
        this.thingsService.createThing(createThingDto);
    }
}

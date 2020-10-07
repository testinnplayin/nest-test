import { Controller, Get, Param } from '@nestjs/common';

import { Thing } from './thing.interface';
import { ThingsService } from './things.service';


@Controller('things')
export class ThingsController {
    constructor(private thingsService: ThingsService) {}

    @Get()
    async getThings(): Promise<Thing[]> {
        return this.thingsService.getThings();
    }

    @Get(':id')
    async getThing(@Param('id') id): Promise<Thing> {
        return this.thingsService.getThing(id);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { Thing } from './thing.entity';

@Injectable()
export class ThingsService {
    constructor(
        @InjectRepository(Thing)
        private thingsRepository: MongoRepository<Thing>
    ) {}

    async createThing(newThing: Thing) {
        this.thingsRepository.insertOne(newThing);
    }

    async getThings(): Promise<Thing[]> {
        return this.thingsRepository.find();
    }

    async getThing(name: string): Promise<Thing> {
        return this.thingsRepository.findOne({ name: name});
    }
}

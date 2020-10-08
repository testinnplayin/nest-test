import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { Thing } from './thing.entity';

@Injectable()
export class ThingsService {
    // private readonly things: Thing[] = [
    //     { name: 'Thing1', key1: 'foo', key2: 'bar' },
    //     { name: 'Thing2', key1: 'baz', key2: 'boz' },
    //     { name: 'Thing3', key1: 'fudge', key2: 'budge' },
    // ];
    constructor(
        @InjectRepository(Thing)
        private thingsRepository: MongoRepository<Thing>
    ) {}

    async getThings(): Promise<Thing[]> {
        return this.thingsRepository.find();
    }

    async getThing(name: string): Promise<Thing> {
        return this.thingsRepository.findOne(name);
    }
}

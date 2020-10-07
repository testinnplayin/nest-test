import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Thing } from './thing.interface';

@Injectable()
export class ThingsService {
    private readonly things: Thing[] = [
        { name: 'Thing1', key1: 'foo', key2: 'bar' },
        { name: 'Thing2', key1: 'baz', key2: 'boz' },
        { name: 'Thing3', key1: 'fudge', key2: 'budge' },
    ];

    getThings(): Thing[] {
        return this.things;
    }

    getThing(id: string): Thing {
        if (parseInt(id) >= this.things.length) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `No thing found with an id of ${id}`,
            }, HttpStatus.NOT_FOUND);
        }
        return this.things[id];
    }
}

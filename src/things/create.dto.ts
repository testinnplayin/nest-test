import { ObjectID } from 'typeorm';

import thingSchema from '../schemas/thing.json';

export class ThingDto {
    _id: ObjectID;
    name: string;
    key1: string;
    key2: string;

    static _schema = thingSchema;
}

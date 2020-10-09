import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('things')
export class Thing {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    key1: string;

    @Column()
    key2: string;
}
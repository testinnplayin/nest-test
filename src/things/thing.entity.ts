import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Thing {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    key1: string;

    @Column()
    key2: string;
}
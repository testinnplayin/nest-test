import Ajv from 'ajv';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';


@Injectable()
export class ValidateSchema implements PipeTransform {
    constructor(private schema: any) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async transform(value: any, metadata : ArgumentMetadata) {
        const ajv = new Ajv();
        const isValid = ajv.addSchema(this.schema, 'thingSchema')
            .validate('thingSchema', value);

        if (!isValid) throw new BadRequestException('Oops!!');
        return value;
    }
}
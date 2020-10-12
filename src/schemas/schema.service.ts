import fs from 'fs';
import path from 'path';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SchemaService {
    fetchSchema(schemaType: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, `${schemaType}.json`), 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });
    }
}
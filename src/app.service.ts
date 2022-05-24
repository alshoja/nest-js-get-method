import { Injectable } from '@nestjs/common';
import * as db from '../src/db/db.json';

@Injectable()
export class AppService {
  getHello(): any[] {
    return db;
  }
}

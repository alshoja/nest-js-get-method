import { Injectable } from '@nestjs/common';
import * as USERS from '../../db/db.json';

@Injectable()
export class PostsRepository {
  findAll() {
    return USERS;
  }

  findOne(id: number) {
    return USERS.find((user) => user.id == id);
  }
}

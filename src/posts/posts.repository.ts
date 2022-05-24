import { Injectable } from '@nestjs/common';
import * as USERS from '../../db/db.json';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsRepository {
  findAll(): CreatePostDto[] {
    return USERS;
  }

  findOne(id: number): CreatePostDto {
    return USERS.find((user) => user.id == id);
  }
}

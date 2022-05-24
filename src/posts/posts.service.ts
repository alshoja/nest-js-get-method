import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  findAll() {
    return this.postsRepository.findAll();
  }

  findOne(id: number) {
    return this.postsRepository.findOne(id);
  }
}

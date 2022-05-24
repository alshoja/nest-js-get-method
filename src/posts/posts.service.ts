import { Injectable, NotFoundException } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  findAll() {
    return this.postsRepository.findAll();
  }

  findOne(id: number) {
    const user = this.postsRepository.findOne(id);
    if (!user) throw new NotFoundException(`Sorry we couldn't find the post`);
    return user;
  }
}

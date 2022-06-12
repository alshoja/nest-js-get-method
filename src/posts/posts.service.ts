import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  findAll(): CreatePostDto[] {
    return this.postsRepository.findAll();
  }

  findOne(id: number): CreatePostDto {
    const user = this.postsRepository.findOne(id);
    if (!user)
      throw new NotFoundException(
        `Sorry we couldn't find the post on given ID ${id}`,
      );
    return user;
  }
}

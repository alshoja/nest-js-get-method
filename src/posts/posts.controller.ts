import { Controller, Get, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): CreatePostDto[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): CreatePostDto {
    return this.postsService.findOne(+id);
  }
}

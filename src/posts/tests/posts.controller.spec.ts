import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from '../posts.controller';
import { PostsRepository } from '../posts.repository';
import { PostsService } from '../posts.service';

describe('PostsController', () => {
  let controller: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService, PostsRepository],
    }).compile();

    postsService = module.get<PostsService>(PostsService);
    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of posts', async () => {
    const result = [
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
    ];
    jest.spyOn(postsService, 'findAll').mockImplementation(() => result);
    expect(await controller.findAll()).toBe(result);
  });

  it('should return only one post', async () => {
    const result = {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    };
    jest.spyOn(postsService, 'findOne').mockImplementation(() => result);
    expect(await controller.findOne('2')).toBe(result);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowersUserController } from './user_followers_user.controller';

describe('UserFollowersUserController', () => {
  let controller: UserFollowersUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFollowersUserController],
    }).compile();

    controller = module.get<UserFollowersUserController>(UserFollowersUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

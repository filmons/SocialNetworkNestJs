import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowersUserService } from './user_followers_user.service';

describe('UserFollowersUserService', () => {
  let service: UserFollowersUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFollowersUserService],
    }).compile();

    service = module.get<UserFollowersUserService>(UserFollowersUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

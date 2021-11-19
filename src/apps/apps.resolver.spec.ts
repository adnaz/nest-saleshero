import { Test, TestingModule } from '@nestjs/testing';
import { AppsResolver } from './apps.resolver';
import { AppsService } from './apps.service';

describe('AppsResolver', () => {
  let resolver: AppsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppsResolver, AppsService],
    }).compile();

    resolver = module.get<AppsResolver>(AppsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

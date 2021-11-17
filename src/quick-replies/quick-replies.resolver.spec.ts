import { Test, TestingModule } from '@nestjs/testing';
import { QuickRepliesResolver } from './quick-replies.resolver';
import { QuickRepliesService } from './quick-replies.service';

describe('QuickRepliesResolver', () => {
  let resolver: QuickRepliesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuickRepliesResolver, QuickRepliesService],
    }).compile();

    resolver = module.get<QuickRepliesResolver>(QuickRepliesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { QuickReplyValuesResolver } from './quick-reply-values.resolver';
import { QuickReplyValuesService } from './quick-reply-values.service';

describe('QuickReplyValuesResolver', () => {
  let resolver: QuickReplyValuesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuickReplyValuesResolver, QuickReplyValuesService],
    }).compile();

    resolver = module.get<QuickReplyValuesResolver>(QuickReplyValuesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

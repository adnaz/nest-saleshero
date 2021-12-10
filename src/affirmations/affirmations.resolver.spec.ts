import { Test, TestingModule } from '@nestjs/testing';
import { AffirmationsResolver } from './affirmations.resolver';
import { AffirmationsService } from './affirmations.service';

describe('AffirmationsResolver', () => {
  let resolver: AffirmationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffirmationsResolver, AffirmationsService],
    }).compile();

    resolver = module.get<AffirmationsResolver>(AffirmationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

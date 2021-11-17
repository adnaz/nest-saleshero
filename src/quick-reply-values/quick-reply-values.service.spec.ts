import { Test, TestingModule } from '@nestjs/testing';
import { QuickReplyValuesService } from './quick-reply-values.service';

describe('QuickReplyValuesService', () => {
  let service: QuickReplyValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuickReplyValuesService],
    }).compile();

    service = module.get<QuickReplyValuesService>(QuickReplyValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

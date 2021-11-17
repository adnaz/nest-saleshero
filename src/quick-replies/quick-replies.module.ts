import { Module } from '@nestjs/common';
import { QuickRepliesService } from './quick-replies.service';
import { QuickRepliesResolver } from './quick-replies.resolver';

@Module({
  providers: [QuickRepliesResolver, QuickRepliesService]
})
export class QuickRepliesModule {}

import { Module } from '@nestjs/common';
import { QuickReplyValuesService } from './quick-reply-values.service';
import { QuickReplyValuesResolver } from './quick-reply-values.resolver';

@Module({
  providers: [QuickReplyValuesResolver, QuickReplyValuesService]
})
export class QuickReplyValuesModule {}

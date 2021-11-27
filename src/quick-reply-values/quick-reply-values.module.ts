import { Module } from '@nestjs/common';
import { QuickReplyValuesService } from './quick-reply-values.service';
import { QuickReplyValuesResolver } from './quick-reply-values.resolver';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { QuickRepliesService } from 'src/quick-replies/quick-replies.service';

@Module({
  providers: [QuickReplyValuesResolver, QuickReplyValuesService,UsersService,PrismaService,QuickRepliesService]
})
export class QuickReplyValuesModule {}

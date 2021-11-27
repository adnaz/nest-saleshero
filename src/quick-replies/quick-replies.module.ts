import { Module } from '@nestjs/common';
import { QuickRepliesService } from './quick-replies.service';
import { QuickRepliesResolver } from './quick-replies.resolver';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { QuickReplyValuesService } from 'src/quick-reply-values/quick-reply-values.service';

@Module({
  providers: [QuickRepliesResolver, QuickRepliesService,UsersService,PrismaService,QuickReplyValuesService]
})
export class QuickRepliesModule {}

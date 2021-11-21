import { Module } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { RepliesResolver } from './replies.resolver';
import { SectionsService } from 'src/sections/sections.service';
import { PrismaService } from 'src/prisma.service';
import { QuickRepliesService } from 'src/quick-replies/quick-replies.service';

@Module({
  providers: [RepliesResolver, RepliesService,SectionsService,PrismaService,QuickRepliesService]
})
export class RepliesModule {}

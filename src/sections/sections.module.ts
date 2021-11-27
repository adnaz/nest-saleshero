import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsResolver } from './sections.resolver';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';
import { CoursesService } from 'src/courses/courses.service';
import { RepliesService } from 'src/replies/replies.service';

@Module({
  imports: [UsersModule],
  providers: [SectionsResolver, SectionsService,PrismaService,CoursesService,RepliesService]
})
export class SectionsModule {}

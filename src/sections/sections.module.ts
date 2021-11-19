import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsResolver } from './sections.resolver';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';
import { CoursesModule } from 'src/courses/courses.module';
import { CoursesService } from 'src/courses/courses.service';

@Module({
  imports: [UsersModule],
  providers: [SectionsResolver, SectionsService,PrismaService,CoursesService]
})
export class SectionsModule {}

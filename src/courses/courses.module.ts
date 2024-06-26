import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { FilesService } from 'src/files/files.service';
import { SectionsService } from 'src/sections/sections.service';

@Module({
  imports: [UsersModule],
  providers: [CoursesService, CoursesResolver,PrismaService,FilesService,SectionsService]
})
export class CoursesModule {}

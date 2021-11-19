import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { CoursesService } from 'src/courses/courses.service';
import { FilesService } from 'src/files/files.service';
@Module({
    providers: [UsersService, UsersResolver,PrismaService,CoursesService,FilesService],
    exports: [UsersService]
})
export class UsersModule {}

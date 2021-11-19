import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsResolver } from './actors.resolver';
import { PrismaService } from 'src/prisma.service';
import { FilesService } from 'src/files/files.service';

@Module({
  providers: [ActorsResolver, ActorsService,PrismaService,FilesService]
})
export class ActorsModule {}

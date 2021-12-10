import { Module } from '@nestjs/common';
import { AffirmationsService } from './affirmations.service';
import { AffirmationsResolver } from './affirmations.resolver';
import { PrismaService } from 'src/prisma.service';
import { FilesService } from 'src/files/files.service';

@Module({
  providers: [AffirmationsResolver, AffirmationsService,PrismaService,FilesService]
})
export class AffirmationsModule {}

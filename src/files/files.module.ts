import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { S3Service } from './s3.service';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma.service';
import { FilesResolver } from './files.resolver';

@Module({
  controllers: [FilesController],
  providers: [FilesService,S3Service,PrismaService,FilesResolver],
})
export class FilesModule {}

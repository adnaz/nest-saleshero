import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { AppsResolver } from './apps.resolver';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user.service';

@Module({
  providers: [AppsResolver, AppsService,PrismaService,UserService]
})
export class AppsModule {}

import { Injectable } from '@nestjs/common';
// import { QuickReply } from './quickReply.entity';
import { PrismaService } from '../prisma.service';
import {
  QuickReply,
  Prisma,
} from '@prisma/client';
import { FindManyQuickReplyArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args';
@Injectable()
export class QuickRepliesService {
    constructor(private prisma: PrismaService) {}


    async quickReply(quickReplyWhereUniqueInput: Prisma.QuickReplyWhereUniqueInput): Promise<QuickReply | null> {
        return this.prisma.quickReply.findUnique({
          where: quickReplyWhereUniqueInput,
        });
      }
    
      async quickReplies(params: FindManyQuickReplyArgs): Promise<QuickReply[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.quickReply.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createQuickReply(data: Prisma.QuickReplyCreateInput): Promise<QuickReply> {
        return this.prisma.quickReply.create({
          data,
        });
      }
    
      async updateQuickReply(params: {
        where: Prisma.QuickReplyWhereUniqueInput;
        data: Prisma.QuickReplyUpdateInput;
      }): Promise<QuickReply> {
        const { data, where } = params;
        return this.prisma.quickReply.update({
          data,
          where,
        });
      }
    
      async deleteQuickReply(where: Prisma.QuickReplyWhereUniqueInput): Promise<QuickReply> {
        return this.prisma.quickReply.delete({
          where,
        });
      }
}

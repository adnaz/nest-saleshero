import { Injectable } from '@nestjs/common';
// import { Reply } from './reply.entity';
import { PrismaService } from '../prisma.service';
import {
  Reply,
  Prisma,
} from '@prisma/client';
import { FindManyReplyArgs } from 'src/@generated/prisma-nestjs-graphql/reply/find-many-reply.args';
@Injectable()
export class RepliesService {
    constructor(private prisma: PrismaService) {}


    async reply(replyWhereUniqueInput: Prisma.ReplyWhereUniqueInput): Promise<Reply | null> {
        return this.prisma.reply.findUnique({
          where: replyWhereUniqueInput,
        });
      }
    
      async replies(params: FindManyReplyArgs): Promise<Reply[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.reply.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createReply(data: Prisma.ReplyCreateInput): Promise<Reply> {
        return this.prisma.reply.create({
          data,
        });
      }
    
      async updateReply(params: {
        where: Prisma.ReplyWhereUniqueInput;
        data: Prisma.ReplyUpdateInput;
      }): Promise<Reply> {
        const { data, where } = params;
        return this.prisma.reply.update({
          data,
          where,
        });
      }
    
      async deleteReply(where: Prisma.ReplyWhereUniqueInput): Promise<Reply> {
        return this.prisma.reply.delete({
          where,
        });
      }
}

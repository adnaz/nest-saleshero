import { Injectable } from '@nestjs/common';
// import { QuickReplyValue } from './quickReplyValue.entity';
import { PrismaService } from '../prisma.service';
import {
  QuickReplyValue,
  Prisma,
} from '@prisma/client';
import { FindManyQuickReplyValueArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args';
@Injectable()
export class QuickReplyValuesService {
    constructor(private prisma: PrismaService) {}


    async quickReplyValue(quickReplyValueWhereUniqueInput: Prisma.QuickReplyValueWhereUniqueInput): Promise<QuickReplyValue | null> {
        return this.prisma.quickReplyValue.findUnique({
          where: quickReplyValueWhereUniqueInput,
        });
      }
    
      async quickReplyValues(params: FindManyQuickReplyValueArgs): Promise<QuickReplyValue[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.quickReplyValue.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createQuickReplyValue(data: Prisma.QuickReplyValueCreateInput): Promise<QuickReplyValue> {
        return this.prisma.quickReplyValue.create({
          data,
        });
      }
    
      async updateQuickReplyValue(params: {
        where: Prisma.QuickReplyValueWhereUniqueInput;
        data: Prisma.QuickReplyValueUpdateInput;
      }): Promise<QuickReplyValue> {
        const { data, where } = params;
        return this.prisma.quickReplyValue.update({
          data,
          where,
        });
      }
    
      async deleteQuickReplyValue(where: Prisma.QuickReplyValueWhereUniqueInput): Promise<QuickReplyValue> {
        return this.prisma.quickReplyValue.delete({
          where,
        });
      }
}

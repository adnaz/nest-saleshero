import { Injectable } from '@nestjs/common';
// import { Affirmation } from './affirmation.entity';
import { PrismaService } from '../prisma.service';
import {
  Affirmation,
  Prisma,
} from '@prisma/client';
import { FindManyAffirmationArgs } from 'src/@generated/prisma-nestjs-graphql/affirmation/find-many-affirmation.args';
import { AffirmationCreateInput } from 'src/@generated/prisma-nestjs-graphql/affirmation/affirmation-create.input';
@Injectable()
export class AffirmationsService {
    constructor(private prisma: PrismaService) {}


    async affirmation(affirmationWhereUniqueInput: Prisma.AffirmationWhereUniqueInput): Promise<Affirmation | null> {
        return this.prisma.affirmation.findUnique({
          where: affirmationWhereUniqueInput,
        });
      }
    
      async affirmations(params: Prisma.AffirmationFindManyArgs): Promise<Affirmation[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.affirmation.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createAffirmation(data: AffirmationCreateInput): Promise<Affirmation> {
        return this.prisma.affirmation.create({
          data,
        });
      }
    
      async updateAffirmation(params: {
        where: Prisma.AffirmationWhereUniqueInput;
        data: Prisma.AffirmationUpdateInput;
      }): Promise<Affirmation> {
        const { data, where } = params;
        return this.prisma.affirmation.update({
          data,
          where,
        });
      }
    
      async deleteAffirmation(where: Prisma.AffirmationWhereUniqueInput): Promise<Affirmation> {
        return this.prisma.affirmation.delete({
          where,
        });
      }
}

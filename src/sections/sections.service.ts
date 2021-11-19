import { Injectable } from '@nestjs/common';
// import { Section } from './section.entity';
import { PrismaService } from '../prisma.service';
import {
  Section,
  Prisma,
} from '@prisma/client';
import { FindManySectionArgs } from 'src/@generated/prisma-nestjs-graphql/section/find-many-section.args';
@Injectable()
export class SectionsService {
    constructor(private prisma: PrismaService) {}


    async section(sectionWhereUniqueInput: Prisma.SectionWhereUniqueInput): Promise<Section | null> {
        return this.prisma.section.findUnique({
          where: sectionWhereUniqueInput,
        });
      }
    
      async sections(params: FindManySectionArgs): Promise<Section[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.section.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createSection(data: Prisma.SectionCreateInput): Promise<Section> {
        return this.prisma.section.create({
          data,
        });
      }
    
      async updateSection(params: {
        where: Prisma.SectionWhereUniqueInput;
        data: Prisma.SectionUpdateInput;
      }): Promise<Section> {
        const { data, where } = params;
        return this.prisma.section.update({
          data,
          where,
        });
      }
    
      async deleteSection(where: Prisma.SectionWhereUniqueInput): Promise<Section> {
        return this.prisma.section.delete({
          where,
        });
      }
}

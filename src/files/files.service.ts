import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  File,
  Prisma,
} from '@prisma/client';
import { FindManyFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/find-many-file.args';
@Injectable()
export class FilesService {
    constructor(private prisma: PrismaService) {}


    async file(fileWhereUniqueInput: Prisma.FileWhereUniqueInput): Promise<File | null> {
        return this.prisma.file.findUnique({
          where: fileWhereUniqueInput,
        });
      }
    
      async files(params: FindManyFileArgs): Promise<File[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.file.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createFile(data: Prisma.FileCreateInput): Promise<File> {
        return this.prisma.file.create({
          data,
        });
      }
    
      async updateFile(params: {
        where: Prisma.FileWhereUniqueInput;
        data: Prisma.FileUpdateInput;
      }): Promise<File> {
        const { data, where } = params;
        return this.prisma.file.update({
          data,
          where,
        });
      }
    
      async deleteFile(where: Prisma.FileWhereUniqueInput): Promise<File> {
        return this.prisma.file.delete({
          where,
        });
      }
}

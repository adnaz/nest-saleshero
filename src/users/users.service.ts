import { Prisma, User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

  async findOne(username: string): Promise<User | undefined> {
    return  this.prisma.user.findUnique({
      where: {
        username : username
      }
    });
  }


  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
//type from @generated 
  async users(params: FindManyUserArgs): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: Prisma.UserUpdateArgs): Promise<User> {
    const { data, where } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}

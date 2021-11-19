import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Actor,
  Prisma,
} from '@prisma/client';
import { FindManyActorArgs } from 'src/@generated/prisma-nestjs-graphql/actor/find-many-actor.args';
import { ActorCreateInput } from 'src/@generated/prisma-nestjs-graphql/actor/actor-create.input';
@Injectable()
export class ActorsService {
    constructor(private prisma: PrismaService) {}


    async actor(actorWhereUniqueInput: Prisma.ActorWhereUniqueInput): Promise<Actor | null> {
        return this.prisma.actor.findUnique({
          where: actorWhereUniqueInput,
        });
      }
    
      async actors(params: FindManyActorArgs): Promise<Actor[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.actor.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createActor(data: ActorCreateInput): Promise<Actor> {
        return this.prisma.actor.create({
          data,
        });
      }
    
      async updateActor(params: {
        where: Prisma.ActorWhereUniqueInput;
        data: Prisma.ActorUpdateInput;
      }): Promise<Actor> {
        const { data, where } = params;
        return this.prisma.actor.update({
          data,
          where,
        });
      }
    
      async deleteActor(where: Prisma.ActorWhereUniqueInput): Promise<Actor> {
        return this.prisma.actor.delete({
          where,
        });
      }
}

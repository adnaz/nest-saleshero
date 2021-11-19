import { PrismaService } from '../prisma.service';
import { Actor, Prisma } from '@prisma/client';
import { ActorCreateInput } from 'src/@generated/prisma-nestjs-graphql/actor/actor-create.input';
export declare class ActorsService {
    private prisma;
    constructor(prisma: PrismaService);
    actor(actorWhereUniqueInput: Prisma.ActorWhereUniqueInput): Promise<Actor | null>;
    actors(params: Prisma.ActorFindManyArgs): Promise<Actor[]>;
    createActor(data: ActorCreateInput): Promise<Actor>;
    updateActor(params: {
        where: Prisma.ActorWhereUniqueInput;
        data: Prisma.ActorUpdateInput;
    }): Promise<Actor>;
    deleteActor(where: Prisma.ActorWhereUniqueInput): Promise<Actor>;
}

import { registerEnumType } from '@nestjs/graphql';

export enum ActorScalarFieldEnum {
    id = "id",
    name = "name",
    avatar = "avatar",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ActorScalarFieldEnum, { name: 'ActorScalarFieldEnum', description: undefined })

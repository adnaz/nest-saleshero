import { registerEnumType } from '@nestjs/graphql';

export enum ReplyScalarFieldEnum {
    id = "id",
    fileId = "fileId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    sectionId = "sectionId",
    actorId = "actorId",
    quickRepliesId = "quickRepliesId"
}


registerEnumType(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined })

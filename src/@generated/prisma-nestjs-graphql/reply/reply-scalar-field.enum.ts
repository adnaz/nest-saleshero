import { registerEnumType } from '@nestjs/graphql';

export enum ReplyScalarFieldEnum {
    id = "id",
    fileId = "fileId",
    text = "text",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    sectionId = "sectionId",
    actorId = "actorId",
    quickReplyId = "quickReplyId"
}


registerEnumType(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined })

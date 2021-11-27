import { registerEnumType } from '@nestjs/graphql';

export enum ReplyScalarFieldEnum {
    id = "id",
    order = "order",
    fileId = "fileId",
    text = "text",
    reply = "reply",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    sectionId = "sectionId",
    actorId = "actorId",
    quickReplyId = "quickReplyId"
}


registerEnumType(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined })

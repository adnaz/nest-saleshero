import { registerEnumType } from '@nestjs/graphql';

export enum QuickReplyValueScalarFieldEnum {
    id = "id",
    title = "title",
    value = "value",
    quickReplyId = "quickReplyId"
}


registerEnumType(QuickReplyValueScalarFieldEnum, { name: 'QuickReplyValueScalarFieldEnum', description: undefined })

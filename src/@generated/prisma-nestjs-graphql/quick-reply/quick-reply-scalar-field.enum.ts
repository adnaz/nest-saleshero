import { registerEnumType } from '@nestjs/graphql';

export enum QuickReplyScalarFieldEnum {
    id = "id",
    keepIt = "keepIt",
    type = "type"
}


registerEnumType(QuickReplyScalarFieldEnum, { name: 'QuickReplyScalarFieldEnum', description: undefined })

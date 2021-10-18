import { registerEnumType } from '@nestjs/graphql';

export enum QuickReplyScalarFieldEnum {
    id = "id",
    type = "type"
}


registerEnumType(QuickReplyScalarFieldEnum, { name: 'QuickReplyScalarFieldEnum', description: undefined })

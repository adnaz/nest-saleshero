import { registerEnumType } from '@nestjs/graphql';

export enum TypeReply {
    checkbox = "checkbox",
    radio = "radio"
}


registerEnumType(TypeReply, { name: 'TypeReply', description: undefined })

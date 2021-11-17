import { registerEnumType } from '@nestjs/graphql';

export enum TypeFile {
    AUDIO = "AUDIO",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}


registerEnumType(TypeFile, { name: 'TypeFile', description: undefined })

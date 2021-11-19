import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    link = "link",
    location = "location",
    key = "key",
    bucket = "bucket",
    etag = "etag",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    type = "type"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })

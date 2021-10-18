import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    image = "image",
    type = "type",
    courseId = "courseId",
    published = "published",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })

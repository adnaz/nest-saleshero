import { registerEnumType } from '@nestjs/graphql';

export enum CourseScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    audio = "audio",
    image = "image",
    published = "published",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CourseScalarFieldEnum, { name: 'CourseScalarFieldEnum', description: undefined })

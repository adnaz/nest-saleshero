import { registerEnumType } from '@nestjs/graphql';

export enum SectionScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    audio = "audio",
    image = "image",
    type = "type",
    courseId = "courseId",
    published = "published",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SectionScalarFieldEnum, { name: 'SectionScalarFieldEnum', description: undefined })

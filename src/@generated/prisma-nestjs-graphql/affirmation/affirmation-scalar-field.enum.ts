import { registerEnumType } from '@nestjs/graphql';

export enum AffirmationScalarFieldEnum {
    id = "id",
    order = "order",
    title = "title",
    description = "description",
    imageId = "imageId",
    published = "published",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AffirmationScalarFieldEnum, { name: 'AffirmationScalarFieldEnum', description: undefined })

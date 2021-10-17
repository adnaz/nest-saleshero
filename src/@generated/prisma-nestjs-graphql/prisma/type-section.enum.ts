import { registerEnumType } from '@nestjs/graphql';

export enum TypeSection {
    CHAT = "CHAT",
    ARTICLE = "ARTICLE"
}


registerEnumType(TypeSection, { name: 'TypeSection', description: undefined })

import { PrismaService } from '../prisma.service';
import { Section, Prisma } from '@prisma/client';
import { FindManySectionArgs } from 'src/@generated/prisma-nestjs-graphql/section/find-many-section.args';
export declare class SectionsService {
    private prisma;
    constructor(prisma: PrismaService);
    section(sectionWhereUniqueInput: Prisma.SectionWhereUniqueInput): Promise<Section | null>;
    sections(params: FindManySectionArgs): Promise<Section[]>;
    createSection(data: Prisma.SectionCreateInput): Promise<Section>;
    updateSection(params: {
        where: Prisma.SectionWhereUniqueInput;
        data: Prisma.SectionUpdateInput;
    }): Promise<Section>;
    deleteSection(where: Prisma.SectionWhereUniqueInput): Promise<Section>;
}

import { SectionCreateInput } from 'src/@generated/prisma-nestjs-graphql/section/section-create.input';
import { Section } from 'src/@generated/prisma-nestjs-graphql/section/section.model';
import { FindManySectionArgs } from 'src/@generated/prisma-nestjs-graphql/section/find-many-section.args';
import { UpdateOneSectionArgs } from 'src/@generated/prisma-nestjs-graphql/section/update-one-section.args';
import { UsersService } from 'src/users/users.service';
import { SectionsService } from './sections.service';
import { CoursesService } from 'src/courses/courses.service';
export declare class SectionsResolver {
    private sectionsService;
    private usersService;
    private coursesService;
    constructor(sectionsService: SectionsService, usersService: UsersService, coursesService: CoursesService);
    sections(findManySectionArgs: FindManySectionArgs): Promise<Section[]>;
    section(id: number): Promise<import(".prisma/client").Section>;
    createSection(sectionCreateInput: SectionCreateInput): Promise<import(".prisma/client").Section>;
    updateSection(updateOneSectionArgs: UpdateOneSectionArgs): Promise<import(".prisma/client").Section>;
    removeSection(id: number): Promise<import(".prisma/client").Section>;
    author(section: Section): Promise<import(".prisma/client").User>;
    course(section: Section): Promise<import(".prisma/client").Course>;
}

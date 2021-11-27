import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SectionCreateInput } from 'src/@generated/prisma-nestjs-graphql/section/section-create.input';
import { Section } from 'src/@generated/prisma-nestjs-graphql/section/section.model';
import { FindManySectionArgs } from 'src/@generated/prisma-nestjs-graphql/section/find-many-section.args';
import { UpdateOneSectionArgs } from 'src/@generated/prisma-nestjs-graphql/section/update-one-section.args';
import { UsersService } from 'src/users/users.service';
import { SectionsService } from './sections.service';
import { CoursesService } from 'src/courses/courses.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Authorize } from 'src/auth/roles.decorator';
import { Role } from 'src/@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Prisma } from '@prisma/client';
import { RepliesService } from 'src/replies/replies.service';
import { Reply } from 'src/@generated/prisma-nestjs-graphql/reply/reply.model';
@Resolver(Section)
export class SectionsResolver {

    constructor(private sectionsService: SectionsService, private usersService: UsersService, private coursesService: CoursesService,private repliesService:RepliesService) { }


    @Query(returns => [Section])
    sections(@Args() findManySectionArgs: FindManySectionArgs): Promise<Section[]> {
        return this.sectionsService.sections(findManySectionArgs);
    }

    @Query(retuns => Section)
    async section(@Args('id', { type: () => Int }) id: number) {
        return this.sectionsService.section({ id })
    }
    @UseGuards(GqlAuthGuard)
    @Authorize(Role.ADMIN)
    @Mutation(returns => Section)
    createSection(@CurrentUser() user: User, @Args('sectionCreateInput') sectionCreateInput: SectionCreateInput) {
        return this.sectionsService.createSection({
            ...sectionCreateInput, "author": {
                "connect": {
                    "username": user.username
                }
            }
        })
    }

    @Mutation(() => Section)
    updateSection(@Args() updateOneSectionArgs: UpdateOneSectionArgs) {
        return this.sectionsService.updateSection(updateOneSectionArgs)
    }

    @Mutation(() => Section)
    removeSection(@Args('id', { type: () => Int }) id: number) {
        return this.sectionsService.deleteSection({ id });
    }

    @ResolveField()
    async author(@Parent() section: Section) {
        const { authorId } = section;
        if (authorId) {
            return this.usersService.user({ id: authorId });
        }
    }

    @ResolveField()
    async course(@Parent() section: Section) {
        const { courseId } = section;
        return this.coursesService.course({ id: courseId });
    }

    @ResolveField(()=>[Reply])
    async replies(@Parent() section: Section) {
        const { id } = section;
        return this.repliesService.replies({where:{sectionId:{equals:id}}})
    }
}

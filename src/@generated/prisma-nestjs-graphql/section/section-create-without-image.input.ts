import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { CourseCreateNestedOneWithoutSectionsInput } from '../course/course-create-nested-one-without-sections.input';
import { ReplyCreateNestedManyWithoutSectionInput } from '../reply/reply-create-nested-many-without-section.input';
import { UserCreateNestedOneWithoutSectionsInput } from '../user/user-create-nested-one-without-sections.input';

@InputType()
export class SectionCreateWithoutImageInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TypeSection, {nullable:true})
    type?: keyof typeof TypeSection;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CourseCreateNestedOneWithoutSectionsInput, {nullable:true})
    course?: CourseCreateNestedOneWithoutSectionsInput;

    @Field(() => ReplyCreateNestedManyWithoutSectionInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutSectionInput;

    @Field(() => UserCreateNestedOneWithoutSectionsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutSectionsInput;
}

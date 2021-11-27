import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { FileCreateNestedOneWithoutSectionInput } from '../file/file-create-nested-one-without-section.input';
import { CourseCreateNestedOneWithoutSectionsInput } from '../course/course-create-nested-one-without-sections.input';
import { ReplyCreateNestedManyWithoutSectionInput } from '../reply/reply-create-nested-many-without-section.input';

@InputType()
export class SectionCreateWithoutAuthorInput {

    @Field(() => Float, {nullable:true})
    order?: number;

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

    @Field(() => FileCreateNestedOneWithoutSectionInput, {nullable:true})
    image?: FileCreateNestedOneWithoutSectionInput;

    @Field(() => CourseCreateNestedOneWithoutSectionsInput, {nullable:true})
    course?: CourseCreateNestedOneWithoutSectionsInput;

    @Field(() => ReplyCreateNestedManyWithoutSectionInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutSectionInput;
}

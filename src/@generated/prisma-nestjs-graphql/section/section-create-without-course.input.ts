import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { FileCreateNestedOneWithoutSectionInput } from '../file/file-create-nested-one-without-section.input';
import { ReplyCreateNestedManyWithoutSectionInput } from '../reply/reply-create-nested-many-without-section.input';
import { UserCreateNestedOneWithoutSectionsInput } from '../user/user-create-nested-one-without-sections.input';

@InputType()
export class SectionCreateWithoutCourseInput {

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

    @Field(() => ReplyCreateNestedManyWithoutSectionInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutSectionInput;

    @Field(() => UserCreateNestedOneWithoutSectionsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutSectionsInput;
}

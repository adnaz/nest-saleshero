import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { ReplyUncheckedCreateNestedManyWithoutSectionInput } from '../reply/reply-unchecked-create-nested-many-without-section.input';

@InputType()
export class SectionUncheckedCreateWithoutImageInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TypeSection, {nullable:true})
    type?: keyof typeof TypeSection;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutSectionInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutSectionInput;
}

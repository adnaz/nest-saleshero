import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { ReplyUncheckedCreateNestedManyWithoutSectionInput } from '../reply/reply-unchecked-create-nested-many-without-section.input';

@InputType()
export class SectionUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => TypeSection, {nullable:true})
    type?: keyof typeof TypeSection;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutSectionInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutSectionInput;
}

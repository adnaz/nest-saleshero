import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SectionUncheckedCreateNestedManyWithoutCourseInput } from '../section/section-unchecked-create-nested-many-without-course.input';

@InputType()
export class CourseUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    audioId?: number;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SectionUncheckedCreateNestedManyWithoutCourseInput, {nullable:true})
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput;
}

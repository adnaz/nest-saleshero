import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutCourseInput } from './section-update-without-course.input';
import { SectionCreateWithoutCourseInput } from './section-create-without-course.input';

@InputType()
export class SectionUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionUpdateWithoutCourseInput, {nullable:false})
    update!: SectionUpdateWithoutCourseInput;

    @Field(() => SectionCreateWithoutCourseInput, {nullable:false})
    create!: SectionCreateWithoutCourseInput;
}

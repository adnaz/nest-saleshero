import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutCourseInput } from './section-update-without-course.input';

@InputType()
export class SectionUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionUpdateWithoutCourseInput, {nullable:false})
    data!: SectionUpdateWithoutCourseInput;
}

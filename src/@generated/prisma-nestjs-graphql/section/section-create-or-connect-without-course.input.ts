import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionCreateWithoutCourseInput } from './section-create-without-course.input';

@InputType()
export class SectionCreateOrConnectWithoutCourseInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateWithoutCourseInput, {nullable:false})
    create!: SectionCreateWithoutCourseInput;
}

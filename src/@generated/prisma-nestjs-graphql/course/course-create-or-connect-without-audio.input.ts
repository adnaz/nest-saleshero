import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutAudioInput } from './course-create-without-audio.input';

@InputType()
export class CourseCreateOrConnectWithoutAudioInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutAudioInput, {nullable:false})
    create!: CourseCreateWithoutAudioInput;
}

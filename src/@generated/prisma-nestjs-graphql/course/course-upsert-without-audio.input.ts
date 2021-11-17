import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateWithoutAudioInput } from './course-update-without-audio.input';
import { CourseCreateWithoutAudioInput } from './course-create-without-audio.input';

@InputType()
export class CourseUpsertWithoutAudioInput {

    @Field(() => CourseUpdateWithoutAudioInput, {nullable:false})
    update!: CourseUpdateWithoutAudioInput;

    @Field(() => CourseCreateWithoutAudioInput, {nullable:false})
    create!: CourseCreateWithoutAudioInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutCourseAudioInput } from './file-update-without-course-audio.input';
import { FileCreateWithoutCourseAudioInput } from './file-create-without-course-audio.input';

@InputType()
export class FileUpsertWithoutCourseAudioInput {

    @Field(() => FileUpdateWithoutCourseAudioInput, {nullable:false})
    update!: FileUpdateWithoutCourseAudioInput;

    @Field(() => FileCreateWithoutCourseAudioInput, {nullable:false})
    create!: FileCreateWithoutCourseAudioInput;
}

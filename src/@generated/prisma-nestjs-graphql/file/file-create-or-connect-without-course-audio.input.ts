import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutCourseAudioInput } from './file-create-without-course-audio.input';

@InputType()
export class FileCreateOrConnectWithoutCourseAudioInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutCourseAudioInput, {nullable:false})
    create!: FileCreateWithoutCourseAudioInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCourseAudioInput } from './file-create-without-course-audio.input';
import { FileCreateOrConnectWithoutCourseAudioInput } from './file-create-or-connect-without-course-audio.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutCourseAudioInput {

    @Field(() => FileCreateWithoutCourseAudioInput, {nullable:true})
    create?: FileCreateWithoutCourseAudioInput;

    @Field(() => FileCreateOrConnectWithoutCourseAudioInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutCourseAudioInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}

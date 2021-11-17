import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCourseAudioInput } from './file-create-without-course-audio.input';
import { FileCreateOrConnectWithoutCourseAudioInput } from './file-create-or-connect-without-course-audio.input';
import { FileUpsertWithoutCourseAudioInput } from './file-upsert-without-course-audio.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutCourseAudioInput } from './file-update-without-course-audio.input';

@InputType()
export class FileUpdateOneWithoutCourseAudioInput {

    @Field(() => FileCreateWithoutCourseAudioInput, {nullable:true})
    create?: FileCreateWithoutCourseAudioInput;

    @Field(() => FileCreateOrConnectWithoutCourseAudioInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutCourseAudioInput;

    @Field(() => FileUpsertWithoutCourseAudioInput, {nullable:true})
    upsert?: FileUpsertWithoutCourseAudioInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutCourseAudioInput, {nullable:true})
    update?: FileUpdateWithoutCourseAudioInput;
}

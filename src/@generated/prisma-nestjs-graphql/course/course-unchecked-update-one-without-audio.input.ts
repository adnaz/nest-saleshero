import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutAudioInput } from './course-create-without-audio.input';
import { CourseCreateOrConnectWithoutAudioInput } from './course-create-or-connect-without-audio.input';
import { CourseUpsertWithoutAudioInput } from './course-upsert-without-audio.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutAudioInput } from './course-update-without-audio.input';

@InputType()
export class CourseUncheckedUpdateOneWithoutAudioInput {

    @Field(() => CourseCreateWithoutAudioInput, {nullable:true})
    create?: CourseCreateWithoutAudioInput;

    @Field(() => CourseCreateOrConnectWithoutAudioInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutAudioInput;

    @Field(() => CourseUpsertWithoutAudioInput, {nullable:true})
    upsert?: CourseUpsertWithoutAudioInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutAudioInput, {nullable:true})
    update?: CourseUpdateWithoutAudioInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutAudioInput } from './course-create-without-audio.input';
import { CourseCreateOrConnectWithoutAudioInput } from './course-create-or-connect-without-audio.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseUncheckedCreateNestedOneWithoutAudioInput {

    @Field(() => CourseCreateWithoutAudioInput, {nullable:true})
    create?: CourseCreateWithoutAudioInput;

    @Field(() => CourseCreateOrConnectWithoutAudioInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutAudioInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;
}

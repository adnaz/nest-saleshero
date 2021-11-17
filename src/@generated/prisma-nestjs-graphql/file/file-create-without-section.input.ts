import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from '../prisma/type-file.enum';
import { ReplyCreateNestedOneWithoutFileInput } from '../reply/reply-create-nested-one-without-file.input';
import { ActorCreateNestedOneWithoutAvatarInput } from '../actor/actor-create-nested-one-without-avatar.input';
import { CourseCreateNestedOneWithoutImageInput } from '../course/course-create-nested-one-without-image.input';
import { CourseCreateNestedOneWithoutAudioInput } from '../course/course-create-nested-one-without-audio.input';

@InputType()
export class FileCreateWithoutSectionInput {

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TypeFile, {nullable:false})
    type!: keyof typeof TypeFile;

    @Field(() => ReplyCreateNestedOneWithoutFileInput, {nullable:true})
    reply?: ReplyCreateNestedOneWithoutFileInput;

    @Field(() => ActorCreateNestedOneWithoutAvatarInput, {nullable:true})
    actor?: ActorCreateNestedOneWithoutAvatarInput;

    @Field(() => CourseCreateNestedOneWithoutImageInput, {nullable:true})
    courseImage?: CourseCreateNestedOneWithoutImageInput;

    @Field(() => CourseCreateNestedOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseCreateNestedOneWithoutAudioInput;
}

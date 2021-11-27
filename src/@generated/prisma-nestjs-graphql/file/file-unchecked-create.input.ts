import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeFile } from '../prisma/type-file.enum';
import { ReplyUncheckedCreateNestedOneWithoutFileInput } from '../reply/reply-unchecked-create-nested-one-without-file.input';
import { ActorUncheckedCreateNestedOneWithoutAvatarInput } from '../actor/actor-unchecked-create-nested-one-without-avatar.input';
import { CourseUncheckedCreateNestedOneWithoutImageInput } from '../course/course-unchecked-create-nested-one-without-image.input';
import { CourseUncheckedCreateNestedOneWithoutAudioInput } from '../course/course-unchecked-create-nested-one-without-audio.input';
import { SectionUncheckedCreateNestedOneWithoutImageInput } from '../section/section-unchecked-create-nested-one-without-image.input';

@InputType()
export class FileUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => String, {nullable:true})
    bucket?: string;

    @Field(() => String, {nullable:true})
    etag?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TypeFile, {nullable:true})
    type?: keyof typeof TypeFile;

    @Field(() => ReplyUncheckedCreateNestedOneWithoutFileInput, {nullable:true})
    reply?: ReplyUncheckedCreateNestedOneWithoutFileInput;

    @Field(() => ActorUncheckedCreateNestedOneWithoutAvatarInput, {nullable:true})
    actor?: ActorUncheckedCreateNestedOneWithoutAvatarInput;

    @Field(() => CourseUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    courseImage?: CourseUncheckedCreateNestedOneWithoutImageInput;

    @Field(() => CourseUncheckedCreateNestedOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseUncheckedCreateNestedOneWithoutAudioInput;

    @Field(() => SectionUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    section?: SectionUncheckedCreateNestedOneWithoutImageInput;
}

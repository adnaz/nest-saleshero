import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from '../prisma/type-file.enum';
import { ReplyCreateNestedOneWithoutFileInput } from '../reply/reply-create-nested-one-without-file.input';
import { ActorCreateNestedOneWithoutAvatarInput } from '../actor/actor-create-nested-one-without-avatar.input';
import { CourseCreateNestedOneWithoutImageInput } from '../course/course-create-nested-one-without-image.input';
import { CourseCreateNestedOneWithoutAudioInput } from '../course/course-create-nested-one-without-audio.input';
import { SectionCreateNestedOneWithoutImageInput } from '../section/section-create-nested-one-without-image.input';

@InputType()
export class FileCreateInput {

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

    @Field(() => ReplyCreateNestedOneWithoutFileInput, {nullable:true})
    reply?: ReplyCreateNestedOneWithoutFileInput;

    @Field(() => ActorCreateNestedOneWithoutAvatarInput, {nullable:true})
    actor?: ActorCreateNestedOneWithoutAvatarInput;

    @Field(() => CourseCreateNestedOneWithoutImageInput, {nullable:true})
    courseImage?: CourseCreateNestedOneWithoutImageInput;

    @Field(() => CourseCreateNestedOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseCreateNestedOneWithoutAudioInput;

    @Field(() => SectionCreateNestedOneWithoutImageInput, {nullable:true})
    section?: SectionCreateNestedOneWithoutImageInput;
}

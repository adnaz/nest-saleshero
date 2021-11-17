import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCourseImageInput } from './file-create-without-course-image.input';
import { FileCreateOrConnectWithoutCourseImageInput } from './file-create-or-connect-without-course-image.input';
import { FileUpsertWithoutCourseImageInput } from './file-upsert-without-course-image.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutCourseImageInput } from './file-update-without-course-image.input';

@InputType()
export class FileUpdateOneWithoutCourseImageInput {

    @Field(() => FileCreateWithoutCourseImageInput, {nullable:true})
    create?: FileCreateWithoutCourseImageInput;

    @Field(() => FileCreateOrConnectWithoutCourseImageInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutCourseImageInput;

    @Field(() => FileUpsertWithoutCourseImageInput, {nullable:true})
    upsert?: FileUpsertWithoutCourseImageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutCourseImageInput, {nullable:true})
    update?: FileUpdateWithoutCourseImageInput;
}

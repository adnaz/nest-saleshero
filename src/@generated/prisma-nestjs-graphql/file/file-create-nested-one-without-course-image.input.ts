import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutCourseImageInput } from './file-create-without-course-image.input';
import { FileCreateOrConnectWithoutCourseImageInput } from './file-create-or-connect-without-course-image.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutCourseImageInput {

    @Field(() => FileCreateWithoutCourseImageInput, {nullable:true})
    create?: FileCreateWithoutCourseImageInput;

    @Field(() => FileCreateOrConnectWithoutCourseImageInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutCourseImageInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}

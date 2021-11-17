import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutCourseImageInput } from './file-create-without-course-image.input';

@InputType()
export class FileCreateOrConnectWithoutCourseImageInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutCourseImageInput, {nullable:false})
    create!: FileCreateWithoutCourseImageInput;
}

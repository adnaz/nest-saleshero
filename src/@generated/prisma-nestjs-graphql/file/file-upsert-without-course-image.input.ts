import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutCourseImageInput } from './file-update-without-course-image.input';
import { FileCreateWithoutCourseImageInput } from './file-create-without-course-image.input';

@InputType()
export class FileUpsertWithoutCourseImageInput {

    @Field(() => FileUpdateWithoutCourseImageInput, {nullable:false})
    update!: FileUpdateWithoutCourseImageInput;

    @Field(() => FileCreateWithoutCourseImageInput, {nullable:false})
    create!: FileCreateWithoutCourseImageInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateManyAuthorInput } from './course-create-many-author.input';

@InputType()
export class CourseCreateManyAuthorInputEnvelope {

    @Field(() => [CourseCreateManyAuthorInput], {nullable:false})
    data!: Array<CourseCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutSectionsInput } from './course-create-without-sections.input';

@InputType()
export class CourseCreateOrConnectWithoutSectionsInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutSectionsInput, {nullable:false})
    create!: CourseCreateWithoutSectionsInput;
}

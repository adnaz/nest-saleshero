import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutSectionsInput } from './course-create-without-sections.input';
import { CourseCreateOrConnectWithoutSectionsInput } from './course-create-or-connect-without-sections.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseCreateNestedOneWithoutSectionsInput {

    @Field(() => CourseCreateWithoutSectionsInput, {nullable:true})
    create?: CourseCreateWithoutSectionsInput;

    @Field(() => CourseCreateOrConnectWithoutSectionsInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;
}

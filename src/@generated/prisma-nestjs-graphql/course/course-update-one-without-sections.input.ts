import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutSectionsInput } from './course-create-without-sections.input';
import { CourseCreateOrConnectWithoutSectionsInput } from './course-create-or-connect-without-sections.input';
import { CourseUpsertWithoutSectionsInput } from './course-upsert-without-sections.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutSectionsInput } from './course-update-without-sections.input';

@InputType()
export class CourseUpdateOneWithoutSectionsInput {

    @Field(() => CourseCreateWithoutSectionsInput, {nullable:true})
    create?: CourseCreateWithoutSectionsInput;

    @Field(() => CourseCreateOrConnectWithoutSectionsInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput;

    @Field(() => CourseUpsertWithoutSectionsInput, {nullable:true})
    upsert?: CourseUpsertWithoutSectionsInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CourseUpdateWithoutSectionsInput, {nullable:true})
    update?: CourseUpdateWithoutSectionsInput;
}

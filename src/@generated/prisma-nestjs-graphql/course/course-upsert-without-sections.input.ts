import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateWithoutSectionsInput } from './course-update-without-sections.input';
import { CourseCreateWithoutSectionsInput } from './course-create-without-sections.input';

@InputType()
export class CourseUpsertWithoutSectionsInput {

    @Field(() => CourseUpdateWithoutSectionsInput, {nullable:false})
    update!: CourseUpdateWithoutSectionsInput;

    @Field(() => CourseCreateWithoutSectionsInput, {nullable:false})
    create!: CourseCreateWithoutSectionsInput;
}

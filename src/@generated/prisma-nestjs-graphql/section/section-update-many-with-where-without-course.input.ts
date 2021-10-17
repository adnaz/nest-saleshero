import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionScalarWhereInput } from './section-scalar-where.input';
import { SectionUpdateManyMutationInput } from './section-update-many-mutation.input';

@InputType()
export class SectionUpdateManyWithWhereWithoutCourseInput {

    @Field(() => SectionScalarWhereInput, {nullable:false})
    where!: SectionScalarWhereInput;

    @Field(() => SectionUpdateManyMutationInput, {nullable:false})
    data!: SectionUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutAuthorInput } from './section-update-without-author.input';

@InputType()
export class SectionUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionUpdateWithoutAuthorInput, {nullable:false})
    data!: SectionUpdateWithoutAuthorInput;
}

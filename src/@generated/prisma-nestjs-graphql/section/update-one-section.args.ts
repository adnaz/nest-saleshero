import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionUpdateInput } from './section-update.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@ArgsType()
export class UpdateOneSectionArgs {

    @Field(() => SectionUpdateInput, {nullable:false})
    data!: SectionUpdateInput;

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;
}

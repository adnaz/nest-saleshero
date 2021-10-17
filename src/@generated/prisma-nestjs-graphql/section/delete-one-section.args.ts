import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@ArgsType()
export class DeleteOneSectionArgs {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;
}

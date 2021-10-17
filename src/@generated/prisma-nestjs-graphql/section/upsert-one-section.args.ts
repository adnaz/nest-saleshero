import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionCreateInput } from './section-create.input';
import { SectionUpdateInput } from './section-update.input';

@ArgsType()
export class UpsertOneSectionArgs {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateInput, {nullable:false})
    create!: SectionCreateInput;

    @Field(() => SectionUpdateInput, {nullable:false})
    update!: SectionUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionUpdateManyMutationInput } from './section-update-many-mutation.input';
import { SectionWhereInput } from './section-where.input';

@ArgsType()
export class UpdateManySectionArgs {

    @Field(() => SectionUpdateManyMutationInput, {nullable:false})
    data!: SectionUpdateManyMutationInput;

    @Field(() => SectionWhereInput, {nullable:true})
    where?: SectionWhereInput;
}

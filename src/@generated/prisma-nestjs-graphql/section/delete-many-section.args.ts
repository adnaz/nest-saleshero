import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';

@ArgsType()
export class DeleteManySectionArgs {

    @Field(() => SectionWhereInput, {nullable:true})
    where?: SectionWhereInput;
}

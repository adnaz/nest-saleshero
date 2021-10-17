import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionCreateInput } from './section-create.input';

@ArgsType()
export class CreateOneSectionArgs {

    @Field(() => SectionCreateInput, {nullable:false})
    data!: SectionCreateInput;
}

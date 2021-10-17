import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionCreateManyInput } from './section-create-many.input';

@ArgsType()
export class CreateManySectionArgs {

    @Field(() => [SectionCreateManyInput], {nullable:false})
    data!: Array<SectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppCreateManyInput } from './app-create-many.input';

@ArgsType()
export class CreateManyAppArgs {

    @Field(() => [AppCreateManyInput], {nullable:false})
    data!: Array<AppCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

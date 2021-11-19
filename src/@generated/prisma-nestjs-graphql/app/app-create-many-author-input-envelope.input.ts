import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateManyAuthorInput } from './app-create-many-author.input';

@InputType()
export class AppCreateManyAuthorInputEnvelope {

    @Field(() => [AppCreateManyAuthorInput], {nullable:false})
    data!: Array<AppCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

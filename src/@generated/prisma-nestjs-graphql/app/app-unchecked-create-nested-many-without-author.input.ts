import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutAuthorInput } from './app-create-without-author.input';
import { AppCreateOrConnectWithoutAuthorInput } from './app-create-or-connect-without-author.input';
import { AppCreateManyAuthorInputEnvelope } from './app-create-many-author-input-envelope.input';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [AppCreateWithoutAuthorInput], {nullable:true})
    create?: Array<AppCreateWithoutAuthorInput>;

    @Field(() => [AppCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<AppCreateOrConnectWithoutAuthorInput>;

    @Field(() => AppCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: AppCreateManyAuthorInputEnvelope;

    @Field(() => [AppWhereUniqueInput], {nullable:true})
    connect?: Array<AppWhereUniqueInput>;
}

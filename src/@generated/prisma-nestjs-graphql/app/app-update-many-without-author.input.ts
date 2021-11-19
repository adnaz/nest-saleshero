import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutAuthorInput } from './app-create-without-author.input';
import { AppCreateOrConnectWithoutAuthorInput } from './app-create-or-connect-without-author.input';
import { AppUpsertWithWhereUniqueWithoutAuthorInput } from './app-upsert-with-where-unique-without-author.input';
import { AppCreateManyAuthorInputEnvelope } from './app-create-many-author-input-envelope.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithWhereUniqueWithoutAuthorInput } from './app-update-with-where-unique-without-author.input';
import { AppUpdateManyWithWhereWithoutAuthorInput } from './app-update-many-with-where-without-author.input';
import { AppScalarWhereInput } from './app-scalar-where.input';

@InputType()
export class AppUpdateManyWithoutAuthorInput {

    @Field(() => [AppCreateWithoutAuthorInput], {nullable:true})
    create?: Array<AppCreateWithoutAuthorInput>;

    @Field(() => [AppCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<AppCreateOrConnectWithoutAuthorInput>;

    @Field(() => [AppUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<AppUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => AppCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: AppCreateManyAuthorInputEnvelope;

    @Field(() => [AppWhereUniqueInput], {nullable:true})
    set?: Array<AppWhereUniqueInput>;

    @Field(() => [AppWhereUniqueInput], {nullable:true})
    disconnect?: Array<AppWhereUniqueInput>;

    @Field(() => [AppWhereUniqueInput], {nullable:true})
    delete?: Array<AppWhereUniqueInput>;

    @Field(() => [AppWhereUniqueInput], {nullable:true})
    connect?: Array<AppWhereUniqueInput>;

    @Field(() => [AppUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<AppUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [AppUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<AppUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [AppScalarWhereInput], {nullable:true})
    deleteMany?: Array<AppScalarWhereInput>;
}

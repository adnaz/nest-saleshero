import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutActorInput } from './file-create-without-actor.input';
import { FileCreateOrConnectWithoutActorInput } from './file-create-or-connect-without-actor.input';
import { FileUpsertWithoutActorInput } from './file-upsert-without-actor.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutActorInput } from './file-update-without-actor.input';

@InputType()
export class FileUpdateOneWithoutActorInput {

    @Field(() => FileCreateWithoutActorInput, {nullable:true})
    create?: FileCreateWithoutActorInput;

    @Field(() => FileCreateOrConnectWithoutActorInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutActorInput;

    @Field(() => FileUpsertWithoutActorInput, {nullable:true})
    upsert?: FileUpsertWithoutActorInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutActorInput, {nullable:true})
    update?: FileUpdateWithoutActorInput;
}

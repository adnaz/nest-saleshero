import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutActorInput } from './file-create-without-actor.input';
import { FileCreateOrConnectWithoutActorInput } from './file-create-or-connect-without-actor.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutActorInput {

    @Field(() => FileCreateWithoutActorInput, {nullable:true})
    create?: FileCreateWithoutActorInput;

    @Field(() => FileCreateOrConnectWithoutActorInput, {nullable:true})
    connectOrCreate?: FileCreateOrConnectWithoutActorInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    connect?: FileWhereUniqueInput;
}

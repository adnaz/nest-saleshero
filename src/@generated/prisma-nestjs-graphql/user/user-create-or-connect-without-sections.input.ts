import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutSectionsInput } from './user-create-without-sections.input';

@InputType()
export class UserCreateOrConnectWithoutSectionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSectionsInput, {nullable:false})
    create!: UserCreateWithoutSectionsInput;
}

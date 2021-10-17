import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSectionsInput } from './user-update-without-sections.input';
import { UserCreateWithoutSectionsInput } from './user-create-without-sections.input';

@InputType()
export class UserUpsertWithoutSectionsInput {

    @Field(() => UserUpdateWithoutSectionsInput, {nullable:false})
    update!: UserUpdateWithoutSectionsInput;

    @Field(() => UserCreateWithoutSectionsInput, {nullable:false})
    create!: UserCreateWithoutSectionsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';

@InputType()
export class AppListRelationFilter {

    @Field(() => AppWhereInput, {nullable:true})
    every?: AppWhereInput;

    @Field(() => AppWhereInput, {nullable:true})
    some?: AppWhereInput;

    @Field(() => AppWhereInput, {nullable:true})
    none?: AppWhereInput;
}

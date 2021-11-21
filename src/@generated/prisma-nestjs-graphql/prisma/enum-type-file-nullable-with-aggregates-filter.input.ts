import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from './type-file.enum';
import { NestedEnumTypeFileNullableWithAggregatesFilter } from './nested-enum-type-file-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTypeFileNullableFilter } from './nested-enum-type-file-nullable-filter.input';

@InputType()
export class EnumTypeFileNullableWithAggregatesFilter {

    @Field(() => TypeFile, {nullable:true})
    equals?: keyof typeof TypeFile;

    @Field(() => [TypeFile], {nullable:true})
    in?: Array<keyof typeof TypeFile>;

    @Field(() => [TypeFile], {nullable:true})
    notIn?: Array<keyof typeof TypeFile>;

    @Field(() => NestedEnumTypeFileNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTypeFileNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTypeFileNullableFilter, {nullable:true})
    _min?: NestedEnumTypeFileNullableFilter;

    @Field(() => NestedEnumTypeFileNullableFilter, {nullable:true})
    _max?: NestedEnumTypeFileNullableFilter;
}

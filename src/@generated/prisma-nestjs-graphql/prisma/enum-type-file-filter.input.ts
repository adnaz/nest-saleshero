import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from './type-file.enum';
import { NestedEnumTypeFileFilter } from './nested-enum-type-file-filter.input';

@InputType()
export class EnumTypeFileFilter {

    @Field(() => TypeFile, {nullable:true})
    equals?: keyof typeof TypeFile;

    @Field(() => [TypeFile], {nullable:true})
    in?: Array<keyof typeof TypeFile>;

    @Field(() => [TypeFile], {nullable:true})
    notIn?: Array<keyof typeof TypeFile>;

    @Field(() => NestedEnumTypeFileFilter, {nullable:true})
    not?: NestedEnumTypeFileFilter;
}

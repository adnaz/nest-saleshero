"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeFileNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("./type-file.enum");
const nested_enum_type_file_nullable_filter_input_1 = require("./nested-enum-type-file-nullable-filter.input");
let EnumTypeFileNullableFilter = class EnumTypeFileNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumTypeFileNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeFileNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeFileNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter)
], EnumTypeFileNullableFilter.prototype, "not", void 0);
EnumTypeFileNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumTypeFileNullableFilter);
exports.EnumTypeFileNullableFilter = EnumTypeFileNullableFilter;

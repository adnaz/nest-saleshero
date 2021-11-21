"use strict";
var NestedEnumTypeFileNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeFileNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("./type-file.enum");
let NestedEnumTypeFileNullableFilter = NestedEnumTypeFileNullableFilter_1 = class NestedEnumTypeFileNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumTypeFileNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeFileNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeFileNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumTypeFileNullableFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumTypeFileNullableFilter)
], NestedEnumTypeFileNullableFilter.prototype, "not", void 0);
NestedEnumTypeFileNullableFilter = NestedEnumTypeFileNullableFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumTypeFileNullableFilter);
exports.NestedEnumTypeFileNullableFilter = NestedEnumTypeFileNullableFilter;

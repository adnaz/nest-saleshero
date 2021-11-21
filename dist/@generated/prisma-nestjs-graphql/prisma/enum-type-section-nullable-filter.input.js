"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeSectionNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
const nested_enum_type_section_nullable_filter_input_1 = require("./nested-enum-type-section-nullable-filter.input");
let EnumTypeSectionNullableFilter = class EnumTypeSectionNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumTypeSectionNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeSectionNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeSectionNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], EnumTypeSectionNullableFilter.prototype, "not", void 0);
EnumTypeSectionNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumTypeSectionNullableFilter);
exports.EnumTypeSectionNullableFilter = EnumTypeSectionNullableFilter;

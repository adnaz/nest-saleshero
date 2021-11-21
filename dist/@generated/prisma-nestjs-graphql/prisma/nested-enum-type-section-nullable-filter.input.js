"use strict";
var NestedEnumTypeSectionNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeSectionNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
let NestedEnumTypeSectionNullableFilter = NestedEnumTypeSectionNullableFilter_1 = class NestedEnumTypeSectionNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumTypeSectionNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeSectionNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeSectionNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumTypeSectionNullableFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumTypeSectionNullableFilter)
], NestedEnumTypeSectionNullableFilter.prototype, "not", void 0);
NestedEnumTypeSectionNullableFilter = NestedEnumTypeSectionNullableFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumTypeSectionNullableFilter);
exports.NestedEnumTypeSectionNullableFilter = NestedEnumTypeSectionNullableFilter;

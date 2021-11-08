"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeSectionNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
const nested_enum_type_section_nullable_with_aggregates_filter_input_1 = require("./nested-enum-type-section-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_section_nullable_filter_input_1 = require("./nested-enum-type-section-nullable-filter.input");
let EnumTypeSectionNullableWithAggregatesFilter = class EnumTypeSectionNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    __metadata("design:type", Array)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    __metadata("design:type", Array)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_with_aggregates_filter_input_1.NestedEnumTypeSectionNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_section_nullable_with_aggregates_filter_input_1.NestedEnumTypeSectionNullableWithAggregatesFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumTypeSectionNullableWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumTypeSectionNullableWithAggregatesFilter);
exports.EnumTypeSectionNullableWithAggregatesFilter = EnumTypeSectionNullableWithAggregatesFilter;
//# sourceMappingURL=enum-type-section-nullable-with-aggregates-filter.input.js.map
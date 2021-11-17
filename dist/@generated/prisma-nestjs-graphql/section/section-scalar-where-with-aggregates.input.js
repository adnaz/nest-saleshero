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
var SectionScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const int_nullable_with_aggregates_filter_input_1 = require("../prisma/int-nullable-with-aggregates-filter.input");
const enum_type_section_nullable_with_aggregates_filter_input_1 = require("../prisma/enum-type-section-nullable-with-aggregates-filter.input");
const bool_nullable_with_aggregates_filter_input_1 = require("../prisma/bool-nullable-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let SectionScalarWhereWithAggregatesInput = SectionScalarWhereWithAggregatesInput_1 = class SectionScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [SectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "imageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_section_nullable_with_aggregates_filter_input_1.EnumTypeSectionNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_type_section_nullable_with_aggregates_filter_input_1.EnumTypeSectionNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], SectionScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
SectionScalarWhereWithAggregatesInput = SectionScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], SectionScalarWhereWithAggregatesInput);
exports.SectionScalarWhereWithAggregatesInput = SectionScalarWhereWithAggregatesInput;
//# sourceMappingURL=section-scalar-where-with-aggregates.input.js.map
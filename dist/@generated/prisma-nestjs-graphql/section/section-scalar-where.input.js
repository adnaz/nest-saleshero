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
var SectionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_type_section_nullable_filter_input_1 = require("../prisma/enum-type-section-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let SectionScalarWhereInput = SectionScalarWhereInput_1 = class SectionScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [SectionScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SectionScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SectionScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], SectionScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SectionScalarWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SectionScalarWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SectionScalarWhereInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter)
], SectionScalarWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionScalarWhereInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], SectionScalarWhereInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionScalarWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionScalarWhereInput.prototype, "updatedAt", void 0);
SectionScalarWhereInput = SectionScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], SectionScalarWhereInput);
exports.SectionScalarWhereInput = SectionScalarWhereInput;
//# sourceMappingURL=section-scalar-where.input.js.map
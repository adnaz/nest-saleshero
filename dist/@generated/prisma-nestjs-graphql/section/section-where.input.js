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
var SectionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_type_section_nullable_filter_input_1 = require("../prisma/enum-type-section-nullable-filter.input");
const course_relation_filter_input_1 = require("../course/course-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let SectionWhereInput = SectionWhereInput_1 = class SectionWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [SectionWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SectionWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SectionWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SectionWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], SectionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SectionWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SectionWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SectionWhereInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter)
], SectionWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_relation_filter_input_1.CourseRelationFilter, { nullable: true }),
    __metadata("design:type", course_relation_filter_input_1.CourseRelationFilter)
], SectionWhereInput.prototype, "course", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionWhereInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], SectionWhereInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], SectionWhereInput.prototype, "author", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], SectionWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SectionWhereInput.prototype, "updatedAt", void 0);
SectionWhereInput = SectionWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], SectionWhereInput);
exports.SectionWhereInput = SectionWhereInput;
//# sourceMappingURL=section-where.input.js.map
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
var CourseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const section_list_relation_filter_input_1 = require("../section/section-list-relation-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const graphql_3 = require("@nestjs/graphql");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let CourseWhereInput = CourseWhereInput_1 = class CourseWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CourseWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CourseWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CourseWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], CourseWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CourseWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CourseWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CourseWhereInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CourseWhereInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_list_relation_filter_input_1.SectionListRelationFilter, { nullable: true }),
    __metadata("design:type", section_list_relation_filter_input_1.SectionListRelationFilter)
], CourseWhereInput.prototype, "sections", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CourseWhereInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], CourseWhereInput.prototype, "author", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CourseWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CourseWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CourseWhereInput.prototype, "updatedAt", void 0);
CourseWhereInput = CourseWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CourseWhereInput);
exports.CourseWhereInput = CourseWhereInput;
//# sourceMappingURL=course-where.input.js.map
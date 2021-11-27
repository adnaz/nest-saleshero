"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const file_model_1 = require("../file/file.model");
const graphql_5 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const course_model_1 = require("../course/course.model");
const reply_model_1 = require("../reply/reply.model");
const user_model_1 = require("../user/user.model");
const section_count_output_1 = require("./section-count.output");
let Section = class Section {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Section.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Section.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Section.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Section.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_model_1.File)
], Section.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Section.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], Section.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_model_1.Course, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_model_1.Course)
], Section.prototype, "course", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Section.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_model_1.Reply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Section.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Section.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_model_1.User)
], Section.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Section.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Section.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Section.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_count_output_1.SectionCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_count_output_1.SectionCount)
], Section.prototype, "_count", void 0);
Section = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Section);
exports.Section = Section;

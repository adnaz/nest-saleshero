"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const file_model_1 = require("../file/file.model");
const graphql_5 = require("@nestjs/graphql");
const section_model_1 = require("../section/section.model");
const user_model_1 = require("../user/user.model");
const course_count_output_1 = require("./course-count.output");
let Course = class Course {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Course.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Course.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Course.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Course.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_model_1.File)
], Course.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Course.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_model_1.File)
], Course.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Course.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_model_1.Section], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Course.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Course.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_model_1.User)
], Course.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Course.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Course.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Course.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_count_output_1.CourseCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_count_output_1.CourseCount)
], Course.prototype, "_count", void 0);
Course = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Course);
exports.Course = Course;

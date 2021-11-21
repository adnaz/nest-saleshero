"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const app_model_1 = require("../app/app.model");
const post_model_1 = require("../post/post.model");
const course_model_1 = require("../course/course.model");
const section_model_1 = require("../section/section.model");
const role_enum_1 = require("../prisma/role.enum");
const user_count_output_1 = require("./user-count.output");
let User = class User {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_model_1.App], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_model_1.Post], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_model_1.Course], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_model_1.Section], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], User.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], User.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], User.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_count_output_1.UserCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_count_output_1.UserCount)
], User.prototype, "_count", void 0);
User = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;

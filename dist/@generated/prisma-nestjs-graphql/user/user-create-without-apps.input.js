"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAppsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Validator = (0, tslib_1.__importStar)(require("class-validator"));
const role_enum_1 = require("../prisma/role.enum");
const post_create_nested_many_without_author_input_1 = require("../post/post-create-nested-many-without-author.input");
const course_create_nested_many_without_author_input_1 = require("../course/course-create-nested-many-without-author.input");
const section_create_nested_many_without_author_input_1 = require("../section/section-create-nested-many-without-author.input");
let UserCreateWithoutAppsInput = class UserCreateWithoutAppsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAppsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAppsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAppsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAppsInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateWithoutAppsInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateWithoutAppsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateWithoutAppsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAppsInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_many_without_author_input_1.CourseCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_many_without_author_input_1.CourseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAppsInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_many_without_author_input_1.SectionCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_many_without_author_input_1.SectionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAppsInput.prototype, "sections", void 0);
UserCreateWithoutAppsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateWithoutAppsInput);
exports.UserCreateWithoutAppsInput = UserCreateWithoutAppsInput;

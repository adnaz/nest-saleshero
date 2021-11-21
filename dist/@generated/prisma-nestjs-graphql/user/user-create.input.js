"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Validator = (0, tslib_1.__importStar)(require("class-validator"));
const role_enum_1 = require("../prisma/role.enum");
const app_create_nested_many_without_author_input_1 = require("../app/app-create-nested-many-without-author.input");
const post_create_nested_many_without_author_input_1 = require("../post/post-create-nested-many-without-author.input");
const course_create_nested_many_without_author_input_1 = require("../course/course-create-nested-many-without-author.input");
const section_create_nested_many_without_author_input_1 = require("../section/section-create-nested-many-without-author.input");
let UserCreateInput = class UserCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_create_nested_many_without_author_input_1.AppCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_create_nested_many_without_author_input_1.AppCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_many_without_author_input_1.CourseCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_many_without_author_input_1.CourseCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_nested_many_without_author_input_1.SectionCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_nested_many_without_author_input_1.SectionCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "sections", void 0);
UserCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;

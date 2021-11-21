"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Validator = (0, tslib_1.__importStar)(require("class-validator"));
const role_enum_1 = require("../prisma/role.enum");
const app_unchecked_create_nested_many_without_author_input_1 = require("../app/app-unchecked-create-nested-many-without-author.input");
const post_unchecked_create_nested_many_without_author_input_1 = require("../post/post-unchecked-create-nested-many-without-author.input");
const course_unchecked_create_nested_many_without_author_input_1 = require("../course/course-unchecked-create-nested-many-without-author.input");
const section_unchecked_create_nested_many_without_author_input_1 = require("../section/section-unchecked-create-nested-many-without-author.input");
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserUncheckedCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUncheckedCreateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUncheckedCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUncheckedCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_unchecked_create_nested_many_without_author_input_1.AppUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_unchecked_create_nested_many_without_author_input_1.AppUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateInput.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_create_nested_many_without_author_input_1.CourseUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_create_nested_many_without_author_input_1.CourseUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_unchecked_create_nested_many_without_author_input_1.SectionUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_unchecked_create_nested_many_without_author_input_1.SectionUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateInput.prototype, "sections", void 0);
UserUncheckedCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutCoursesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_courses_input_1 = require("./user-create-without-courses.input");
const user_create_or_connect_without_courses_input_1 = require("./user-create-or-connect-without-courses.input");
const user_upsert_without_courses_input_1 = require("./user-upsert-without-courses.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_without_courses_input_1 = require("./user-update-without-courses.input");
let UserUpdateOneWithoutCoursesInput = class UserUpdateOneWithoutCoursesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_courses_input_1.UserCreateWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_courses_input_1.UserCreateWithoutCoursesInput)
], UserUpdateOneWithoutCoursesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_courses_input_1.UserCreateOrConnectWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_courses_input_1.UserCreateOrConnectWithoutCoursesInput)
], UserUpdateOneWithoutCoursesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_upsert_without_courses_input_1.UserUpsertWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_upsert_without_courses_input_1.UserUpsertWithoutCoursesInput)
], UserUpdateOneWithoutCoursesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutCoursesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutCoursesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutCoursesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_courses_input_1.UserUpdateWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_without_courses_input_1.UserUpdateWithoutCoursesInput)
], UserUpdateOneWithoutCoursesInput.prototype, "update", void 0);
UserUpdateOneWithoutCoursesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutCoursesInput);
exports.UserUpdateOneWithoutCoursesInput = UserUpdateOneWithoutCoursesInput;

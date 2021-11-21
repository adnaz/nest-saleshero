"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutCoursesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_courses_input_1 = require("./user-create-without-courses.input");
const user_create_or_connect_without_courses_input_1 = require("./user-create-or-connect-without-courses.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutCoursesInput = class UserCreateNestedOneWithoutCoursesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_courses_input_1.UserCreateWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_courses_input_1.UserCreateWithoutCoursesInput)
], UserCreateNestedOneWithoutCoursesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_courses_input_1.UserCreateOrConnectWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_courses_input_1.UserCreateOrConnectWithoutCoursesInput)
], UserCreateNestedOneWithoutCoursesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutCoursesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutCoursesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutCoursesInput);
exports.UserCreateNestedOneWithoutCoursesInput = UserCreateNestedOneWithoutCoursesInput;

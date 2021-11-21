"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutCoursesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_create_without_courses_input_1 = require("./user-create-without-courses.input");
let UserCreateOrConnectWithoutCoursesInput = class UserCreateOrConnectWithoutCoursesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutCoursesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_courses_input_1.UserCreateWithoutCoursesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_courses_input_1.UserCreateWithoutCoursesInput)
], UserCreateOrConnectWithoutCoursesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutCoursesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateOrConnectWithoutCoursesInput);
exports.UserCreateOrConnectWithoutCoursesInput = UserCreateOrConnectWithoutCoursesInput;

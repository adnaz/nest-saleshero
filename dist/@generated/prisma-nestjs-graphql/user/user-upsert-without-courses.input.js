"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutCoursesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_courses_input_1 = require("./user-update-without-courses.input");
const user_create_without_courses_input_1 = require("./user-create-without-courses.input");
let UserUpsertWithoutCoursesInput = class UserUpsertWithoutCoursesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_courses_input_1.UserUpdateWithoutCoursesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_without_courses_input_1.UserUpdateWithoutCoursesInput)
], UserUpsertWithoutCoursesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_courses_input_1.UserCreateWithoutCoursesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_courses_input_1.UserCreateWithoutCoursesInput)
], UserUpsertWithoutCoursesInput.prototype, "create", void 0);
UserUpsertWithoutCoursesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpsertWithoutCoursesInput);
exports.UserUpsertWithoutCoursesInput = UserUpsertWithoutCoursesInput;

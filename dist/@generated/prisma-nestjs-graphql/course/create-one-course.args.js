"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_input_1 = require("./course-create.input");
let CreateOneCourseArgs = class CreateOneCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_input_1.CourseCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_input_1.CourseCreateInput)
], CreateOneCourseArgs.prototype, "data", void 0);
CreateOneCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneCourseArgs);
exports.CreateOneCourseArgs = CreateOneCourseArgs;

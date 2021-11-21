"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCourseArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_many_input_1 = require("./course-create-many.input");
let CreateManyCourseArgs = class CreateManyCourseArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [course_create_many_input_1.CourseCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyCourseArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyCourseArgs.prototype, "skipDuplicates", void 0);
CreateManyCourseArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyCourseArgs);
exports.CreateManyCourseArgs = CreateManyCourseArgs;

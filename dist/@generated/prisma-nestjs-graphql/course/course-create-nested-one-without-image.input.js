"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateNestedOneWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_image_input_1 = require("./course-create-without-image.input");
const course_create_or_connect_without_image_input_1 = require("./course-create-or-connect-without-image.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let CourseCreateNestedOneWithoutImageInput = class CourseCreateNestedOneWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_image_input_1.CourseCreateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_without_image_input_1.CourseCreateWithoutImageInput)
], CourseCreateNestedOneWithoutImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_or_connect_without_image_input_1.CourseCreateOrConnectWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_or_connect_without_image_input_1.CourseCreateOrConnectWithoutImageInput)
], CourseCreateNestedOneWithoutImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseCreateNestedOneWithoutImageInput.prototype, "connect", void 0);
CourseCreateNestedOneWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateNestedOneWithoutImageInput);
exports.CourseCreateNestedOneWithoutImageInput = CourseCreateNestedOneWithoutImageInput;

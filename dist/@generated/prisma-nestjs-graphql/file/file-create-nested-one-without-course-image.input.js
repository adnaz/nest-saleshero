"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedOneWithoutCourseImageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_course_image_input_1 = require("./file-create-without-course-image.input");
const file_create_or_connect_without_course_image_input_1 = require("./file-create-or-connect-without-course-image.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let FileCreateNestedOneWithoutCourseImageInput = class FileCreateNestedOneWithoutCourseImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => file_create_without_course_image_input_1.FileCreateWithoutCourseImageInput, { nullable: true }),
    __metadata("design:type", file_create_without_course_image_input_1.FileCreateWithoutCourseImageInput)
], FileCreateNestedOneWithoutCourseImageInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_or_connect_without_course_image_input_1.FileCreateOrConnectWithoutCourseImageInput, { nullable: true }),
    __metadata("design:type", file_create_or_connect_without_course_image_input_1.FileCreateOrConnectWithoutCourseImageInput)
], FileCreateNestedOneWithoutCourseImageInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    __metadata("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateNestedOneWithoutCourseImageInput.prototype, "connect", void 0);
FileCreateNestedOneWithoutCourseImageInput = __decorate([
    (0, graphql_2.InputType)()
], FileCreateNestedOneWithoutCourseImageInput);
exports.FileCreateNestedOneWithoutCourseImageInput = FileCreateNestedOneWithoutCourseImageInput;
//# sourceMappingURL=file-create-nested-one-without-course-image.input.js.map
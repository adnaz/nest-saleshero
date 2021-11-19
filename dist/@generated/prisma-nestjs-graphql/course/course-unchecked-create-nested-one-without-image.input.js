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
exports.CourseUncheckedCreateNestedOneWithoutImageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_image_input_1 = require("./course-create-without-image.input");
const course_create_or_connect_without_image_input_1 = require("./course-create-or-connect-without-image.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let CourseUncheckedCreateNestedOneWithoutImageInput = class CourseUncheckedCreateNestedOneWithoutImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => course_create_without_image_input_1.CourseCreateWithoutImageInput, { nullable: true }),
    __metadata("design:type", course_create_without_image_input_1.CourseCreateWithoutImageInput)
], CourseUncheckedCreateNestedOneWithoutImageInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_or_connect_without_image_input_1.CourseCreateOrConnectWithoutImageInput, { nullable: true }),
    __metadata("design:type", course_create_or_connect_without_image_input_1.CourseCreateOrConnectWithoutImageInput)
], CourseUncheckedCreateNestedOneWithoutImageInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUncheckedCreateNestedOneWithoutImageInput.prototype, "connect", void 0);
CourseUncheckedCreateNestedOneWithoutImageInput = __decorate([
    (0, graphql_2.InputType)()
], CourseUncheckedCreateNestedOneWithoutImageInput);
exports.CourseUncheckedCreateNestedOneWithoutImageInput = CourseUncheckedCreateNestedOneWithoutImageInput;
//# sourceMappingURL=course-unchecked-create-nested-one-without-image.input.js.map
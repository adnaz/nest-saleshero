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
exports.UserCreateWithoutCoursesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Validator = require("class-validator");
const role_enum_1 = require("../prisma/role.enum");
const app_create_nested_many_without_author_input_1 = require("../app/app-create-nested-many-without-author.input");
const graphql_3 = require("@nestjs/graphql");
const post_create_nested_many_without_author_input_1 = require("../post/post-create-nested-many-without-author.input");
const section_create_nested_many_without_author_input_1 = require("../section/section-create-nested-many-without-author.input");
let UserCreateWithoutCoursesInput = class UserCreateWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutCoursesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    __metadata("design:type", String)
], UserCreateWithoutCoursesInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutCoursesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutCoursesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    __metadata("design:type", Object)
], UserCreateWithoutCoursesInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutCoursesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutCoursesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", app_create_nested_many_without_author_input_1.AppCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutCoursesInput.prototype, "apps", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutCoursesInput.prototype, "posts", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", section_create_nested_many_without_author_input_1.SectionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutCoursesInput.prototype, "sections", void 0);
UserCreateWithoutCoursesInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutCoursesInput);
exports.UserCreateWithoutCoursesInput = UserCreateWithoutCoursesInput;
//# sourceMappingURL=user-create-without-courses.input.js.map
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
exports.UserUncheckedCreateWithoutCoursesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Validator = require("class-validator");
const role_enum_1 = require("../prisma/role.enum");
const app_unchecked_create_nested_many_without_author_input_1 = require("../app/app-unchecked-create-nested-many-without-author.input");
const graphql_4 = require("@nestjs/graphql");
const post_unchecked_create_nested_many_without_author_input_1 = require("../post/post-unchecked-create-nested-many-without-author.input");
const section_unchecked_create_nested_many_without_author_input_1 = require("../section/section-unchecked-create-nested-many-without-author.input");
let UserUncheckedCreateWithoutCoursesInput = class UserUncheckedCreateWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UserUncheckedCreateWithoutCoursesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCoursesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCoursesInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCoursesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCoursesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCoursesInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCoursesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCoursesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", app_unchecked_create_nested_many_without_author_input_1.AppUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateWithoutCoursesInput.prototype, "apps", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateWithoutCoursesInput.prototype, "posts", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", section_unchecked_create_nested_many_without_author_input_1.SectionUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateWithoutCoursesInput.prototype, "sections", void 0);
UserUncheckedCreateWithoutCoursesInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutCoursesInput);
exports.UserUncheckedCreateWithoutCoursesInput = UserUncheckedCreateWithoutCoursesInput;
//# sourceMappingURL=user-unchecked-create-without-courses.input.js.map
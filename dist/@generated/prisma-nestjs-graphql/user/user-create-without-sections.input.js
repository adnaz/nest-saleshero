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
exports.UserCreateWithoutSectionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Validator = require("class-validator");
const role_enum_1 = require("../prisma/role.enum");
const post_create_nested_many_without_author_input_1 = require("../post/post-create-nested-many-without-author.input");
const course_create_nested_many_without_author_input_1 = require("../course/course-create-nested-many-without-author.input");
let UserCreateWithoutSectionsInput = class UserCreateWithoutSectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutSectionsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    __metadata("design:type", String)
], UserCreateWithoutSectionsInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutSectionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutSectionsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    __metadata("design:type", Object)
], UserCreateWithoutSectionsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutSectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutSectionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput, { nullable: true }),
    __metadata("design:type", post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutSectionsInput.prototype, "posts", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_nested_many_without_author_input_1.CourseCreateNestedManyWithoutAuthorInput, { nullable: true }),
    __metadata("design:type", course_create_nested_many_without_author_input_1.CourseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutSectionsInput.prototype, "courses", void 0);
UserCreateWithoutSectionsInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutSectionsInput);
exports.UserCreateWithoutSectionsInput = UserCreateWithoutSectionsInput;
//# sourceMappingURL=user-create-without-sections.input.js.map
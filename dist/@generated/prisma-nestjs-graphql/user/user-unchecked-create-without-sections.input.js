"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Validator = (0, tslib_1.__importStar)(require("class-validator"));
const role_enum_1 = require("../prisma/role.enum");
const app_unchecked_create_nested_many_without_author_input_1 = require("../app/app-unchecked-create-nested-many-without-author.input");
const post_unchecked_create_nested_many_without_author_input_1 = require("../post/post-unchecked-create-nested-many-without-author.input");
const course_unchecked_create_nested_many_without_author_input_1 = require("../course/course-unchecked-create-nested-many-without-author.input");
let UserUncheckedCreateWithoutSectionsInput = class UserUncheckedCreateWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserUncheckedCreateWithoutSectionsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateWithoutSectionsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateWithoutSectionsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateWithoutSectionsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserUncheckedCreateWithoutSectionsInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUncheckedCreateWithoutSectionsInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUncheckedCreateWithoutSectionsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserUncheckedCreateWithoutSectionsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_unchecked_create_nested_many_without_author_input_1.AppUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_unchecked_create_nested_many_without_author_input_1.AppUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateWithoutSectionsInput.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateWithoutSectionsInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_unchecked_create_nested_many_without_author_input_1.CourseUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_unchecked_create_nested_many_without_author_input_1.CourseUncheckedCreateNestedManyWithoutAuthorInput)
], UserUncheckedCreateWithoutSectionsInput.prototype, "courses", void 0);
UserUncheckedCreateWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutSectionsInput);
exports.UserUncheckedCreateWithoutSectionsInput = UserUncheckedCreateWithoutSectionsInput;

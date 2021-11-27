"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const file_create_nested_one_without_section_input_1 = require("../file/file-create-nested-one-without-section.input");
const course_create_nested_one_without_sections_input_1 = require("../course/course-create-nested-one-without-sections.input");
const user_create_nested_one_without_sections_input_1 = require("../user/user-create-nested-one-without-sections.input");
let SectionCreateWithoutRepliesInput = class SectionCreateWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionCreateWithoutRepliesInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionCreateWithoutRepliesInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionCreateWithoutRepliesInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionCreateWithoutRepliesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionCreateWithoutRepliesInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionCreateWithoutRepliesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionCreateWithoutRepliesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_section_input_1.FileCreateNestedOneWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_section_input_1.FileCreateNestedOneWithoutSectionInput)
], SectionCreateWithoutRepliesInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_sections_input_1.CourseCreateNestedOneWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_sections_input_1.CourseCreateNestedOneWithoutSectionsInput)
], SectionCreateWithoutRepliesInput.prototype, "course", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_nested_one_without_sections_input_1.UserCreateNestedOneWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_nested_one_without_sections_input_1.UserCreateNestedOneWithoutSectionsInput)
], SectionCreateWithoutRepliesInput.prototype, "author", void 0);
SectionCreateWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateWithoutRepliesInput);
exports.SectionCreateWithoutRepliesInput = SectionCreateWithoutRepliesInput;

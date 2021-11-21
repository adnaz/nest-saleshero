"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const file_create_nested_one_without_section_input_1 = require("../file/file-create-nested-one-without-section.input");
const course_create_nested_one_without_sections_input_1 = require("../course/course-create-nested-one-without-sections.input");
const reply_create_nested_many_without_section_input_1 = require("../reply/reply-create-nested-many-without-section.input");
const user_create_nested_one_without_sections_input_1 = require("../user/user-create-nested-one-without-sections.input");
let SectionCreateInput = class SectionCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionCreateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionCreateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_section_input_1.FileCreateNestedOneWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_section_input_1.FileCreateNestedOneWithoutSectionInput)
], SectionCreateInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_nested_one_without_sections_input_1.CourseCreateNestedOneWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_nested_one_without_sections_input_1.CourseCreateNestedOneWithoutSectionsInput)
], SectionCreateInput.prototype, "course", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_many_without_section_input_1.ReplyCreateNestedManyWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_many_without_section_input_1.ReplyCreateNestedManyWithoutSectionInput)
], SectionCreateInput.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_nested_one_without_sections_input_1.UserCreateNestedOneWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_nested_one_without_sections_input_1.UserCreateNestedOneWithoutSectionsInput)
], SectionCreateInput.prototype, "author", void 0);
SectionCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateInput);
exports.SectionCreateInput = SectionCreateInput;

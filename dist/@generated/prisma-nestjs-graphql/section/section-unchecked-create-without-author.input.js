"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUncheckedCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const reply_unchecked_create_nested_many_without_section_input_1 = require("../reply/reply-unchecked-create-nested-many-without-section.input");
let SectionUncheckedCreateWithoutAuthorInput = class SectionUncheckedCreateWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_many_without_section_input_1.ReplyUncheckedCreateNestedManyWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_create_nested_many_without_section_input_1.ReplyUncheckedCreateNestedManyWithoutSectionInput)
], SectionUncheckedCreateWithoutAuthorInput.prototype, "replies", void 0);
SectionUncheckedCreateWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUncheckedCreateWithoutAuthorInput);
exports.SectionUncheckedCreateWithoutAuthorInput = SectionUncheckedCreateWithoutAuthorInput;

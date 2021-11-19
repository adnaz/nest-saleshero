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
exports.SectionUncheckedCreateWithoutImageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const graphql_4 = require("@nestjs/graphql");
const reply_unchecked_create_nested_many_without_section_input_1 = require("../reply/reply-unchecked-create-nested-many-without-section.input");
let SectionUncheckedCreateWithoutImageInput = class SectionUncheckedCreateWithoutImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SectionUncheckedCreateWithoutImageInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SectionUncheckedCreateWithoutImageInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SectionUncheckedCreateWithoutImageInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], SectionUncheckedCreateWithoutImageInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SectionUncheckedCreateWithoutImageInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SectionUncheckedCreateWithoutImageInput.prototype, "published", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Number)
], SectionUncheckedCreateWithoutImageInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], SectionUncheckedCreateWithoutImageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], SectionUncheckedCreateWithoutImageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_many_without_section_input_1.ReplyUncheckedCreateNestedManyWithoutSectionInput, { nullable: true }),
    __metadata("design:type", reply_unchecked_create_nested_many_without_section_input_1.ReplyUncheckedCreateNestedManyWithoutSectionInput)
], SectionUncheckedCreateWithoutImageInput.prototype, "replies", void 0);
SectionUncheckedCreateWithoutImageInput = __decorate([
    (0, graphql_2.InputType)()
], SectionUncheckedCreateWithoutImageInput);
exports.SectionUncheckedCreateWithoutImageInput = SectionUncheckedCreateWithoutImageInput;
//# sourceMappingURL=section-unchecked-create-without-image.input.js.map
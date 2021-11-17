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
exports.SectionCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_section_input_1 = require("../file/file-create-nested-one-without-section.input");
const course_create_nested_one_without_sections_input_1 = require("../course/course-create-nested-one-without-sections.input");
const reply_create_nested_many_without_section_input_1 = require("../reply/reply-create-nested-many-without-section.input");
const user_create_nested_one_without_sections_input_1 = require("../user/user-create-nested-one-without-sections.input");
let SectionCreateInput = class SectionCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SectionCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SectionCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], SectionCreateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SectionCreateInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_nested_one_without_section_input_1.FileCreateNestedOneWithoutSectionInput, { nullable: true }),
    __metadata("design:type", file_create_nested_one_without_section_input_1.FileCreateNestedOneWithoutSectionInput)
], SectionCreateInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_nested_one_without_sections_input_1.CourseCreateNestedOneWithoutSectionsInput, { nullable: true }),
    __metadata("design:type", course_create_nested_one_without_sections_input_1.CourseCreateNestedOneWithoutSectionsInput)
], SectionCreateInput.prototype, "course", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_nested_many_without_section_input_1.ReplyCreateNestedManyWithoutSectionInput, { nullable: true }),
    __metadata("design:type", reply_create_nested_many_without_section_input_1.ReplyCreateNestedManyWithoutSectionInput)
], SectionCreateInput.prototype, "replies", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_create_nested_one_without_sections_input_1.UserCreateNestedOneWithoutSectionsInput)
], SectionCreateInput.prototype, "author", void 0);
SectionCreateInput = __decorate([
    (0, graphql_2.InputType)()
], SectionCreateInput);
exports.SectionCreateInput = SectionCreateInput;
//# sourceMappingURL=section-create.input.js.map
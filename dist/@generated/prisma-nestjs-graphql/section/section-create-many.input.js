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
exports.SectionCreateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
const graphql_4 = require("@nestjs/graphql");
let SectionCreateManyInput = class SectionCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SectionCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SectionCreateManyInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SectionCreateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SectionCreateManyInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], SectionCreateManyInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SectionCreateManyInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SectionCreateManyInput.prototype, "published", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Number)
], SectionCreateManyInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], SectionCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], SectionCreateManyInput.prototype, "updatedAt", void 0);
SectionCreateManyInput = __decorate([
    (0, graphql_2.InputType)()
], SectionCreateManyInput);
exports.SectionCreateManyInput = SectionCreateManyInput;
//# sourceMappingURL=section-create-many.input.js.map
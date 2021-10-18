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
var MessageScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_type_section_nullable_filter_input_1 = require("../prisma/enum-type-section-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let MessageScalarWhereInput = MessageScalarWhereInput_1 = class MessageScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MessageScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], MessageScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MessageScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], MessageScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MessageScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], MessageScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], MessageScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], MessageScalarWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], MessageScalarWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], MessageScalarWhereInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", enum_type_section_nullable_filter_input_1.EnumTypeSectionNullableFilter)
], MessageScalarWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], MessageScalarWhereInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], MessageScalarWhereInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], MessageScalarWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], MessageScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], MessageScalarWhereInput.prototype, "updatedAt", void 0);
MessageScalarWhereInput = MessageScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MessageScalarWhereInput);
exports.MessageScalarWhereInput = MessageScalarWhereInput;
//# sourceMappingURL=message-scalar-where.input.js.map
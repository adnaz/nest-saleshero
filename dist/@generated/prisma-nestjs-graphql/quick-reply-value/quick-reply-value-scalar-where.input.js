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
var QuickReplyValueScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
let QuickReplyValueScalarWhereInput = QuickReplyValueScalarWhereInput_1 = class QuickReplyValueScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyValueScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyValueScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyValueScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], QuickReplyValueScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], QuickReplyValueScalarWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], QuickReplyValueScalarWhereInput.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], QuickReplyValueScalarWhereInput.prototype, "quickReplyId", void 0);
QuickReplyValueScalarWhereInput = QuickReplyValueScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyValueScalarWhereInput);
exports.QuickReplyValueScalarWhereInput = QuickReplyValueScalarWhereInput;
//# sourceMappingURL=quick-reply-value-scalar-where.input.js.map
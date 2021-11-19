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
var QuickReplyValueWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const quick_reply_relation_filter_input_1 = require("../quick-reply/quick-reply-relation-filter.input");
const graphql_3 = require("@nestjs/graphql");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
let QuickReplyValueWhereInput = QuickReplyValueWhereInput_1 = class QuickReplyValueWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyValueWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyValueWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyValueWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], QuickReplyValueWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], QuickReplyValueWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], QuickReplyValueWhereInput.prototype, "value", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", quick_reply_relation_filter_input_1.QuickReplyRelationFilter)
], QuickReplyValueWhereInput.prototype, "quickReply", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], QuickReplyValueWhereInput.prototype, "quickReplyId", void 0);
QuickReplyValueWhereInput = QuickReplyValueWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyValueWhereInput);
exports.QuickReplyValueWhereInput = QuickReplyValueWhereInput;
//# sourceMappingURL=quick-reply-value-where.input.js.map
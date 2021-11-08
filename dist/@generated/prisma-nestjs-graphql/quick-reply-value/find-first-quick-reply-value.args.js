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
exports.FindFirstQuickReplyValueArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
const quick_reply_value_order_by_with_relation_input_1 = require("./quick-reply-value-order-by-with-relation.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_scalar_field_enum_1 = require("./quick-reply-value-scalar-field.enum");
let FindFirstQuickReplyValueArgs = class FindFirstQuickReplyValueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], FindFirstQuickReplyValueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_order_by_with_relation_input_1.QuickReplyValueOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstQuickReplyValueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: true }),
    __metadata("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], FindFirstQuickReplyValueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstQuickReplyValueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstQuickReplyValueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_scalar_field_enum_1.QuickReplyValueScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstQuickReplyValueArgs.prototype, "distinct", void 0);
FindFirstQuickReplyValueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstQuickReplyValueArgs);
exports.FindFirstQuickReplyValueArgs = FindFirstQuickReplyValueArgs;
//# sourceMappingURL=find-first-quick-reply-value.args.js.map
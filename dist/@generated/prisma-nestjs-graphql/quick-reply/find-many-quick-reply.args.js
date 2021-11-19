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
exports.FindManyQuickReplyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
const quick_reply_order_by_with_relation_input_1 = require("./quick-reply-order-by-with-relation.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_scalar_field_enum_1 = require("./quick-reply-scalar-field.enum");
let FindManyQuickReplyArgs = class FindManyQuickReplyArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    __metadata("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], FindManyQuickReplyArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyQuickReplyArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], FindManyQuickReplyArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyQuickReplyArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyQuickReplyArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_scalar_field_enum_1.QuickReplyScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyQuickReplyArgs.prototype, "distinct", void 0);
FindManyQuickReplyArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyQuickReplyArgs);
exports.FindManyQuickReplyArgs = FindManyQuickReplyArgs;
//# sourceMappingURL=find-many-quick-reply.args.js.map
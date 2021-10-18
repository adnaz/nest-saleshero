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
exports.FindManyReplyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
const reply_order_by_with_relation_input_1 = require("./reply-order-by-with-relation.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const reply_scalar_field_enum_1 = require("./reply-scalar-field.enum");
let FindManyReplyArgs = class FindManyReplyArgs {
};
__decorate([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    __metadata("design:type", reply_where_input_1.ReplyWhereInput)
], FindManyReplyArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyReplyArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], FindManyReplyArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyReplyArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyReplyArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_scalar_field_enum_1.ReplyScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyReplyArgs.prototype, "distinct", void 0);
FindManyReplyArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyReplyArgs);
exports.FindManyReplyArgs = FindManyReplyArgs;
//# sourceMappingURL=find-many-reply.args.js.map
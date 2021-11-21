"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
const reply_order_by_relation_aggregate_input_1 = require("../reply/reply-order-by-relation-aggregate.input");
let ActorOrderByWithRelationInput = class ActorOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], ActorOrderByWithRelationInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithRelationInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_order_by_relation_aggregate_input_1.ReplyOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_order_by_relation_aggregate_input_1.ReplyOrderByRelationAggregateInput)
], ActorOrderByWithRelationInput.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorOrderByWithRelationInput.prototype, "updatedAt", void 0);
ActorOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorOrderByWithRelationInput);
exports.ActorOrderByWithRelationInput = ActorOrderByWithRelationInput;

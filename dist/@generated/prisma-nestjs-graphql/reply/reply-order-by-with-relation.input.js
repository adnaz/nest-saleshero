"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
const section_order_by_with_relation_input_1 = require("../section/section-order-by-with-relation.input");
const actor_order_by_with_relation_input_1 = require("../actor/actor-order-by-with-relation.input");
const quick_reply_order_by_with_relation_input_1 = require("../quick-reply/quick-reply-order-by-with-relation.input");
let ReplyOrderByWithRelationInput = class ReplyOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_order_by_with_relation_input_1.SectionOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_order_by_with_relation_input_1.SectionOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "quickReply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "quickReplyId", void 0);
ReplyOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyOrderByWithRelationInput);
exports.ReplyOrderByWithRelationInput = ReplyOrderByWithRelationInput;

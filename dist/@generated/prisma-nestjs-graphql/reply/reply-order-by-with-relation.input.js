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
exports.ReplyOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
const section_order_by_with_relation_input_1 = require("../section/section-order-by-with-relation.input");
const actor_order_by_with_relation_input_1 = require("../actor/actor-order-by-with-relation.input");
const quick_reply_order_by_with_relation_input_1 = require("../quick-reply/quick-reply-order-by-with-relation.input");
let ReplyOrderByWithRelationInput = class ReplyOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "file", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_order_by_with_relation_input_1.SectionOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", section_order_by_with_relation_input_1.SectionOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "sectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "actorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput)
], ReplyOrderByWithRelationInput.prototype, "quickReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ReplyOrderByWithRelationInput.prototype, "quickRepliesId", void 0);
ReplyOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyOrderByWithRelationInput);
exports.ReplyOrderByWithRelationInput = ReplyOrderByWithRelationInput;
//# sourceMappingURL=reply-order-by-with-relation.input.js.map
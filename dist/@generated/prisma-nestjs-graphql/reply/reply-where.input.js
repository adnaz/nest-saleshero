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
var ReplyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const file_relation_filter_input_1 = require("../file/file-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const section_relation_filter_input_1 = require("../section/section-relation-filter.input");
const actor_relation_filter_input_1 = require("../actor/actor-relation-filter.input");
const quick_reply_relation_filter_input_1 = require("../quick-reply/quick-reply-relation-filter.input");
let ReplyWhereInput = ReplyWhereInput_1 = class ReplyWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ReplyWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ReplyWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ReplyWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ReplyWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    __metadata("design:type", file_relation_filter_input_1.FileRelationFilter)
], ReplyWhereInput.prototype, "file", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ReplyWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ReplyWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_relation_filter_input_1.SectionRelationFilter, { nullable: true }),
    __metadata("design:type", section_relation_filter_input_1.SectionRelationFilter)
], ReplyWhereInput.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ReplyWhereInput.prototype, "sectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_relation_filter_input_1.ActorRelationFilter, { nullable: true }),
    __metadata("design:type", actor_relation_filter_input_1.ActorRelationFilter)
], ReplyWhereInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "actorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_relation_filter_input_1.QuickReplyRelationFilter, { nullable: true }),
    __metadata("design:type", quick_reply_relation_filter_input_1.QuickReplyRelationFilter)
], ReplyWhereInput.prototype, "quickReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "quickRepliesId", void 0);
ReplyWhereInput = ReplyWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ReplyWhereInput);
exports.ReplyWhereInput = ReplyWhereInput;
//# sourceMappingURL=reply-where.input.js.map
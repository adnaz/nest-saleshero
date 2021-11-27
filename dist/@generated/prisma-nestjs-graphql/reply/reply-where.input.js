"use strict";
var ReplyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const file_relation_filter_input_1 = require("../file/file-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const section_relation_filter_input_1 = require("../section/section-relation-filter.input");
const actor_relation_filter_input_1 = require("../actor/actor-relation-filter.input");
const quick_reply_relation_filter_input_1 = require("../quick-reply/quick-reply-relation-filter.input");
let ReplyWhereInput = ReplyWhereInput_1 = class ReplyWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], ReplyWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], ReplyWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_relation_filter_input_1.FileRelationFilter)
], ReplyWhereInput.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ReplyWhereInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ReplyWhereInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], ReplyWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], ReplyWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_relation_filter_input_1.SectionRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_relation_filter_input_1.SectionRelationFilter)
], ReplyWhereInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_relation_filter_input_1.ActorRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_relation_filter_input_1.ActorRelationFilter)
], ReplyWhereInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_relation_filter_input_1.QuickReplyRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_relation_filter_input_1.QuickReplyRelationFilter)
], ReplyWhereInput.prototype, "quickReply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyWhereInput.prototype, "quickReplyId", void 0);
ReplyWhereInput = ReplyWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyWhereInput);
exports.ReplyWhereInput = ReplyWhereInput;

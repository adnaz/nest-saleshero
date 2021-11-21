"use strict";
var QuickReplyValueWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const quick_reply_relation_filter_input_1 = require("../quick-reply/quick-reply-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
let QuickReplyValueWhereInput = QuickReplyValueWhereInput_1 = class QuickReplyValueWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyValueWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyValueWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyValueWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], QuickReplyValueWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], QuickReplyValueWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], QuickReplyValueWhereInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_relation_filter_input_1.QuickReplyRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_relation_filter_input_1.QuickReplyRelationFilter)
], QuickReplyValueWhereInput.prototype, "quickReply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], QuickReplyValueWhereInput.prototype, "quickReplyId", void 0);
QuickReplyValueWhereInput = QuickReplyValueWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueWhereInput);
exports.QuickReplyValueWhereInput = QuickReplyValueWhereInput;

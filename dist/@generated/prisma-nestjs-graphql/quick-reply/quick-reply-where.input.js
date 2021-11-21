"use strict";
var QuickReplyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const reply_relation_filter_input_1 = require("../reply/reply-relation-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const enum_type_reply_nullable_filter_input_1 = require("../prisma/enum-type-reply-nullable-filter.input");
const quick_reply_value_list_relation_filter_input_1 = require("../quick-reply-value/quick-reply-value-list-relation-filter.input");
let QuickReplyWhereInput = QuickReplyWhereInput_1 = class QuickReplyWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], QuickReplyWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_relation_filter_input_1.ReplyRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_relation_filter_input_1.ReplyRelationFilter)
], QuickReplyWhereInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], QuickReplyWhereInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_reply_nullable_filter_input_1.EnumTypeReplyNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_reply_nullable_filter_input_1.EnumTypeReplyNullableFilter)
], QuickReplyWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_list_relation_filter_input_1.QuickReplyValueListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_list_relation_filter_input_1.QuickReplyValueListRelationFilter)
], QuickReplyWhereInput.prototype, "values", void 0);
QuickReplyWhereInput = QuickReplyWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyWhereInput);
exports.QuickReplyWhereInput = QuickReplyWhereInput;

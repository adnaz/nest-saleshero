"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueListRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
let QuickReplyValueListRelationFilter = class QuickReplyValueListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], QuickReplyValueListRelationFilter.prototype, "none", void 0);
QuickReplyValueListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueListRelationFilter);
exports.QuickReplyValueListRelationFilter = QuickReplyValueListRelationFilter;

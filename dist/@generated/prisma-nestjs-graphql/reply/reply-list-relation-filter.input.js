"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyListRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
let ReplyListRelationFilter = class ReplyListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyListRelationFilter.prototype, "none", void 0);
ReplyListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyListRelationFilter);
exports.ReplyListRelationFilter = ReplyListRelationFilter;

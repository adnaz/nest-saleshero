"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReply = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const reply_model_1 = require("../reply/reply.model");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const quick_reply_value_model_1 = require("../quick-reply-value/quick-reply-value.model");
const quick_reply_count_output_1 = require("./quick-reply-count.output");
let QuickReply = class QuickReply {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReply.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_model_1.Reply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_model_1.Reply)
], QuickReply.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReply.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReply.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_model_1.QuickReplyValue], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReply.prototype, "values", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_count_output_1.QuickReplyCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_count_output_1.QuickReplyCount)
], QuickReply.prototype, "_count", void 0);
QuickReply = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], QuickReply);
exports.QuickReply = QuickReply;

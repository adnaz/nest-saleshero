"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValue = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_model_1 = require("../quick-reply/quick-reply.model");
const graphql_4 = require("@nestjs/graphql");
let QuickReplyValue = class QuickReplyValue {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValue.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValue.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValue.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_model_1.QuickReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_model_1.QuickReply)
], QuickReplyValue.prototype, "quickReply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValue.prototype, "quickReplyId", void 0);
QuickReplyValue = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], QuickReplyValue);
exports.QuickReplyValue = QuickReplyValue;

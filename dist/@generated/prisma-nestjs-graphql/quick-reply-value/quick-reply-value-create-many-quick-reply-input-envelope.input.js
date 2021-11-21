"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueCreateManyQuickReplyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_create_many_quick_reply_input_1 = require("./quick-reply-value-create-many-quick-reply.input");
let QuickReplyValueCreateManyQuickReplyInputEnvelope = class QuickReplyValueCreateManyQuickReplyInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_create_many_quick_reply_input_1.QuickReplyValueCreateManyQuickReplyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueCreateManyQuickReplyInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueCreateManyQuickReplyInputEnvelope.prototype, "skipDuplicates", void 0);
QuickReplyValueCreateManyQuickReplyInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueCreateManyQuickReplyInputEnvelope);
exports.QuickReplyValueCreateManyQuickReplyInputEnvelope = QuickReplyValueCreateManyQuickReplyInputEnvelope;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueCreateNestedManyWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_create_without_quick_reply_input_1 = require("./quick-reply-value-create-without-quick-reply.input");
const quick_reply_value_create_or_connect_without_quick_reply_input_1 = require("./quick-reply-value-create-or-connect-without-quick-reply.input");
const quick_reply_value_create_many_quick_reply_input_envelope_input_1 = require("./quick-reply-value-create-many-quick-reply-input-envelope.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
let QuickReplyValueCreateNestedManyWithoutQuickReplyInput = class QuickReplyValueCreateNestedManyWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_create_without_quick_reply_input_1.QuickReplyValueCreateWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueCreateNestedManyWithoutQuickReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_create_or_connect_without_quick_reply_input_1.QuickReplyValueCreateOrConnectWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueCreateNestedManyWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope)
], QuickReplyValueCreateNestedManyWithoutQuickReplyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueCreateNestedManyWithoutQuickReplyInput.prototype, "connect", void 0);
QuickReplyValueCreateNestedManyWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueCreateNestedManyWithoutQuickReplyInput);
exports.QuickReplyValueCreateNestedManyWithoutQuickReplyInput = QuickReplyValueCreateNestedManyWithoutQuickReplyInput;

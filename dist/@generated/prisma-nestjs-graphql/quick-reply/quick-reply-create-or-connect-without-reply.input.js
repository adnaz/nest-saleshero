"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateOrConnectWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
let QuickReplyCreateOrConnectWithoutReplyInput = class QuickReplyCreateOrConnectWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyCreateOrConnectWithoutReplyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyCreateOrConnectWithoutReplyInput.prototype, "create", void 0);
QuickReplyCreateOrConnectWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateOrConnectWithoutReplyInput);
exports.QuickReplyCreateOrConnectWithoutReplyInput = QuickReplyCreateOrConnectWithoutReplyInput;

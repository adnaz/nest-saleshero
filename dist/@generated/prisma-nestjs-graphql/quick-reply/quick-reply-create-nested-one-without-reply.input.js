"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateNestedOneWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
const quick_reply_create_or_connect_without_reply_input_1 = require("./quick-reply-create-or-connect-without-reply.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
let QuickReplyCreateNestedOneWithoutReplyInput = class QuickReplyCreateNestedOneWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyCreateNestedOneWithoutReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_or_connect_without_reply_input_1.QuickReplyCreateOrConnectWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_or_connect_without_reply_input_1.QuickReplyCreateOrConnectWithoutReplyInput)
], QuickReplyCreateNestedOneWithoutReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyCreateNestedOneWithoutReplyInput.prototype, "connect", void 0);
QuickReplyCreateNestedOneWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateNestedOneWithoutReplyInput);
exports.QuickReplyCreateNestedOneWithoutReplyInput = QuickReplyCreateNestedOneWithoutReplyInput;

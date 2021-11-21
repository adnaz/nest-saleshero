"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_create_without_user_input_1 = require("./reply-create-without-user.input");
let ReplyCreateOrConnectWithoutUserInput = class ReplyCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_user_input_1.ReplyCreateWithoutUserInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_user_input_1.ReplyCreateWithoutUserInput)
], ReplyCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateOrConnectWithoutUserInput);
exports.ReplyCreateOrConnectWithoutUserInput = ReplyCreateOrConnectWithoutUserInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_user_input_1 = require("./reply-create-without-user.input");
const reply_create_or_connect_without_user_input_1 = require("./reply-create-or-connect-without-user.input");
const reply_create_many_user_input_envelope_input_1 = require("./reply-create-many-user-input-envelope.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let ReplyCreateNestedManyWithoutUserInput = class ReplyCreateNestedManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_without_user_input_1.ReplyCreateWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyCreateNestedManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_or_connect_without_user_input_1.ReplyCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_many_user_input_envelope_input_1.ReplyCreateManyUserInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_many_user_input_envelope_input_1.ReplyCreateManyUserInputEnvelope)
], ReplyCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
ReplyCreateNestedManyWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateNestedManyWithoutUserInput);
exports.ReplyCreateNestedManyWithoutUserInput = ReplyCreateNestedManyWithoutUserInput;

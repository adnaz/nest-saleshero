"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_user_input_1 = require("./reply-create-without-user.input");
const reply_create_or_connect_without_user_input_1 = require("./reply-create-or-connect-without-user.input");
const reply_upsert_with_where_unique_without_user_input_1 = require("./reply-upsert-with-where-unique-without-user.input");
const reply_create_many_user_input_envelope_input_1 = require("./reply-create-many-user-input-envelope.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_with_where_unique_without_user_input_1 = require("./reply-update-with-where-unique-without-user.input");
const reply_update_many_with_where_without_user_input_1 = require("./reply-update-many-with-where-without-user.input");
const reply_scalar_where_input_1 = require("./reply-scalar-where.input");
let ReplyUncheckedUpdateManyWithoutUserInput = class ReplyUncheckedUpdateManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_without_user_input_1.ReplyCreateWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_or_connect_without_user_input_1.ReplyCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_upsert_with_where_unique_without_user_input_1.ReplyUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_many_user_input_envelope_input_1.ReplyCreateManyUserInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_many_user_input_envelope_input_1.ReplyCreateManyUserInputEnvelope)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_update_with_where_unique_without_user_input_1.ReplyUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_update_many_with_where_without_user_input_1.ReplyUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_scalar_where_input_1.ReplyScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
ReplyUncheckedUpdateManyWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateManyWithoutUserInput);
exports.ReplyUncheckedUpdateManyWithoutUserInput = ReplyUncheckedUpdateManyWithoutUserInput;

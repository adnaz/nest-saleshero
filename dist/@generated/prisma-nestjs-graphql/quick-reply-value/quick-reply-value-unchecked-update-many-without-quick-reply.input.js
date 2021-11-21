"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_create_without_quick_reply_input_1 = require("./quick-reply-value-create-without-quick-reply.input");
const quick_reply_value_create_or_connect_without_quick_reply_input_1 = require("./quick-reply-value-create-or-connect-without-quick-reply.input");
const quick_reply_value_upsert_with_where_unique_without_quick_reply_input_1 = require("./quick-reply-value-upsert-with-where-unique-without-quick-reply.input");
const quick_reply_value_create_many_quick_reply_input_envelope_input_1 = require("./quick-reply-value-create-many-quick-reply-input-envelope.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const quick_reply_value_update_with_where_unique_without_quick_reply_input_1 = require("./quick-reply-value-update-with-where-unique-without-quick-reply.input");
const quick_reply_value_update_many_with_where_without_quick_reply_input_1 = require("./quick-reply-value-update-many-with-where-without-quick-reply.input");
const quick_reply_value_scalar_where_input_1 = require("./quick-reply-value-scalar-where.input");
let QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = class QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_create_without_quick_reply_input_1.QuickReplyValueCreateWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_create_or_connect_without_quick_reply_input_1.QuickReplyValueCreateOrConnectWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_upsert_with_where_unique_without_quick_reply_input_1.QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_update_with_where_unique_without_quick_reply_input_1.QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_update_many_with_where_without_quick_reply_input_1.QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_scalar_where_input_1.QuickReplyValueScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "deleteMany", void 0);
QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput);
exports.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput;

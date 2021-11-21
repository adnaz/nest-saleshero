"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUpdateOneWithoutValuesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_without_values_input_1 = require("./quick-reply-create-without-values.input");
const quick_reply_create_or_connect_without_values_input_1 = require("./quick-reply-create-or-connect-without-values.input");
const quick_reply_upsert_without_values_input_1 = require("./quick-reply-upsert-without-values.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_update_without_values_input_1 = require("./quick-reply-update-without-values.input");
let QuickReplyUpdateOneWithoutValuesInput = class QuickReplyUpdateOneWithoutValuesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_or_connect_without_values_input_1.QuickReplyCreateOrConnectWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_or_connect_without_values_input_1.QuickReplyCreateOrConnectWithoutValuesInput)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_upsert_without_values_input_1.QuickReplyUpsertWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_upsert_without_values_input_1.QuickReplyUpsertWithoutValuesInput)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_without_values_input_1.QuickReplyUpdateWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_without_values_input_1.QuickReplyUpdateWithoutValuesInput)
], QuickReplyUpdateOneWithoutValuesInput.prototype, "update", void 0);
QuickReplyUpdateOneWithoutValuesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUpdateOneWithoutValuesInput);
exports.QuickReplyUpdateOneWithoutValuesInput = QuickReplyUpdateOneWithoutValuesInput;

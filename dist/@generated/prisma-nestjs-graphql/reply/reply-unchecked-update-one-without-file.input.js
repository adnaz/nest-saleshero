"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedUpdateOneWithoutFileInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_file_input_1 = require("./reply-create-without-file.input");
const reply_create_or_connect_without_file_input_1 = require("./reply-create-or-connect-without-file.input");
const reply_upsert_without_file_input_1 = require("./reply-upsert-without-file.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_file_input_1 = require("./reply-update-without-file.input");
let ReplyUncheckedUpdateOneWithoutFileInput = class ReplyUncheckedUpdateOneWithoutFileInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_file_input_1.ReplyCreateWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_file_input_1.ReplyCreateWithoutFileInput)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_file_input_1.ReplyCreateOrConnectWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_or_connect_without_file_input_1.ReplyCreateOrConnectWithoutFileInput)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_upsert_without_file_input_1.ReplyUpsertWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_upsert_without_file_input_1.ReplyUpsertWithoutFileInput)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_file_input_1.ReplyUpdateWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_file_input_1.ReplyUpdateWithoutFileInput)
], ReplyUncheckedUpdateOneWithoutFileInput.prototype, "update", void 0);
ReplyUncheckedUpdateOneWithoutFileInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateOneWithoutFileInput);
exports.ReplyUncheckedUpdateOneWithoutFileInput = ReplyUncheckedUpdateOneWithoutFileInput;

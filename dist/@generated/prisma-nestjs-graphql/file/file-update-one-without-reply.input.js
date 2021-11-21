"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_reply_input_1 = require("./file-create-without-reply.input");
const file_create_or_connect_without_reply_input_1 = require("./file-create-or-connect-without-reply.input");
const file_upsert_without_reply_input_1 = require("./file-upsert-without-reply.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_reply_input_1 = require("./file-update-without-reply.input");
let FileUpdateOneWithoutReplyInput = class FileUpdateOneWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_reply_input_1.FileCreateWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_reply_input_1.FileCreateWithoutReplyInput)
], FileUpdateOneWithoutReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_reply_input_1.FileCreateOrConnectWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_reply_input_1.FileCreateOrConnectWithoutReplyInput)
], FileUpdateOneWithoutReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_upsert_without_reply_input_1.FileUpsertWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_upsert_without_reply_input_1.FileUpsertWithoutReplyInput)
], FileUpdateOneWithoutReplyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutReplyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutReplyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutReplyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_reply_input_1.FileUpdateWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_without_reply_input_1.FileUpdateWithoutReplyInput)
], FileUpdateOneWithoutReplyInput.prototype, "update", void 0);
FileUpdateOneWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutReplyInput);
exports.FileUpdateOneWithoutReplyInput = FileUpdateOneWithoutReplyInput;

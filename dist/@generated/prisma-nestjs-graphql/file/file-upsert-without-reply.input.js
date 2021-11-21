"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_reply_input_1 = require("./file-update-without-reply.input");
const file_create_without_reply_input_1 = require("./file-create-without-reply.input");
let FileUpsertWithoutReplyInput = class FileUpsertWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_reply_input_1.FileUpdateWithoutReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_without_reply_input_1.FileUpdateWithoutReplyInput)
], FileUpsertWithoutReplyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_reply_input_1.FileCreateWithoutReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_reply_input_1.FileCreateWithoutReplyInput)
], FileUpsertWithoutReplyInput.prototype, "create", void 0);
FileUpsertWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpsertWithoutReplyInput);
exports.FileUpsertWithoutReplyInput = FileUpsertWithoutReplyInput;

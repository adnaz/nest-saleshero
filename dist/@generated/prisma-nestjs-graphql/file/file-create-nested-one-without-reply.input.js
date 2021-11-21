"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedOneWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_reply_input_1 = require("./file-create-without-reply.input");
const file_create_or_connect_without_reply_input_1 = require("./file-create-or-connect-without-reply.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let FileCreateNestedOneWithoutReplyInput = class FileCreateNestedOneWithoutReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_reply_input_1.FileCreateWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_reply_input_1.FileCreateWithoutReplyInput)
], FileCreateNestedOneWithoutReplyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_reply_input_1.FileCreateOrConnectWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_reply_input_1.FileCreateOrConnectWithoutReplyInput)
], FileCreateNestedOneWithoutReplyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateNestedOneWithoutReplyInput.prototype, "connect", void 0);
FileCreateNestedOneWithoutReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateNestedOneWithoutReplyInput);
exports.FileCreateNestedOneWithoutReplyInput = FileCreateNestedOneWithoutReplyInput;

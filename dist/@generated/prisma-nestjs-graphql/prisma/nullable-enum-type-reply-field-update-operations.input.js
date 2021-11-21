"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumTypeReplyFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
let NullableEnumTypeReplyFieldUpdateOperationsInput = class NullableEnumTypeReplyFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NullableEnumTypeReplyFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumTypeReplyFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableEnumTypeReplyFieldUpdateOperationsInput);
exports.NullableEnumTypeReplyFieldUpdateOperationsInput = NullableEnumTypeReplyFieldUpdateOperationsInput;

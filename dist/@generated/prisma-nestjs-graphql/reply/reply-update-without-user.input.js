"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_float_field_update_operations_input_1 = require("../prisma/nullable-float-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const file_update_one_without_reply_input_1 = require("../file/file-update-one-without-reply.input");
const section_update_one_without_replies_input_1 = require("../section/section-update-one-without-replies.input");
const quick_reply_update_one_without_reply_input_1 = require("../quick-reply/quick-reply-update-one-without-reply.input");
let ReplyUpdateWithoutUserInput = class ReplyUpdateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput)
], ReplyUpdateWithoutUserInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUpdateWithoutUserInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUpdateWithoutUserInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutUserInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_one_without_reply_input_1.FileUpdateOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_one_without_reply_input_1.FileUpdateOneWithoutReplyInput)
], ReplyUpdateWithoutUserInput.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_one_without_replies_input_1.SectionUpdateOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_one_without_replies_input_1.SectionUpdateOneWithoutRepliesInput)
], ReplyUpdateWithoutUserInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_one_without_reply_input_1.QuickReplyUpdateOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_one_without_reply_input_1.QuickReplyUpdateOneWithoutReplyInput)
], ReplyUpdateWithoutUserInput.prototype, "quickReply", void 0);
ReplyUpdateWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateWithoutUserInput);
exports.ReplyUpdateWithoutUserInput = ReplyUpdateWithoutUserInput;

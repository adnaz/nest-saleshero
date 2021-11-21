"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const file_update_one_without_reply_input_1 = require("../file/file-update-one-without-reply.input");
const section_update_one_without_replies_input_1 = require("../section/section-update-one-without-replies.input");
const actor_update_one_without_replies_input_1 = require("../actor/actor-update-one-without-replies.input");
const quick_reply_update_one_without_reply_input_1 = require("../quick-reply/quick-reply-update-one-without-reply.input");
let ReplyUpdateInput = class ReplyUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_one_without_reply_input_1.FileUpdateOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_one_without_reply_input_1.FileUpdateOneWithoutReplyInput)
], ReplyUpdateInput.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_one_without_replies_input_1.SectionUpdateOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_one_without_replies_input_1.SectionUpdateOneWithoutRepliesInput)
], ReplyUpdateInput.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_one_without_replies_input_1.ActorUpdateOneWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_update_one_without_replies_input_1.ActorUpdateOneWithoutRepliesInput)
], ReplyUpdateInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_one_without_reply_input_1.QuickReplyUpdateOneWithoutReplyInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_one_without_reply_input_1.QuickReplyUpdateOneWithoutReplyInput)
], ReplyUpdateInput.prototype, "quickReply", void 0);
ReplyUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateInput);
exports.ReplyUpdateInput = ReplyUpdateInput;

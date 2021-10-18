"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_create_without_quick_reply_input_1.QuickReplyValueCreateWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_create_or_connect_without_quick_reply_input_1.QuickReplyValueCreateOrConnectWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_upsert_with_where_unique_without_quick_reply_input_1.QuickReplyValueUpsertWithWhereUniqueWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope, { nullable: true }),
    __metadata("design:type", quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_update_with_where_unique_without_quick_reply_input_1.QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_update_many_with_where_without_quick_reply_input_1.QuickReplyValueUpdateManyWithWhereWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_scalar_where_input_1.QuickReplyValueScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput.prototype, "deleteMany", void 0);
QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput);
exports.QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput = QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput;
//# sourceMappingURL=quick-reply-value-unchecked-update-many-without-quick-reply.input.js.map
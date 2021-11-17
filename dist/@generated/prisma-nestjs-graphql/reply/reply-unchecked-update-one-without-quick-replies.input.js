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
exports.ReplyUncheckedUpdateOneWithoutQuickRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_quick_replies_input_1 = require("./reply-create-without-quick-replies.input");
const reply_create_or_connect_without_quick_replies_input_1 = require("./reply-create-or-connect-without-quick-replies.input");
const reply_upsert_without_quick_replies_input_1 = require("./reply-upsert-without-quick-replies.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_quick_replies_input_1 = require("./reply-update-without-quick-replies.input");
let ReplyUncheckedUpdateOneWithoutQuickRepliesInput = class ReplyUncheckedUpdateOneWithoutQuickRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => reply_create_without_quick_replies_input_1.ReplyCreateWithoutQuickRepliesInput, { nullable: true }),
    __metadata("design:type", reply_create_without_quick_replies_input_1.ReplyCreateWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_quick_replies_input_1.ReplyCreateOrConnectWithoutQuickRepliesInput, { nullable: true }),
    __metadata("design:type", reply_create_or_connect_without_quick_replies_input_1.ReplyCreateOrConnectWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_upsert_without_quick_replies_input_1.ReplyUpsertWithoutQuickRepliesInput, { nullable: true }),
    __metadata("design:type", reply_upsert_without_quick_replies_input_1.ReplyUpsertWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_update_without_quick_replies_input_1.ReplyUpdateWithoutQuickRepliesInput, { nullable: true }),
    __metadata("design:type", reply_update_without_quick_replies_input_1.ReplyUpdateWithoutQuickRepliesInput)
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput.prototype, "update", void 0);
ReplyUncheckedUpdateOneWithoutQuickRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateOneWithoutQuickRepliesInput);
exports.ReplyUncheckedUpdateOneWithoutQuickRepliesInput = ReplyUncheckedUpdateOneWithoutQuickRepliesInput;
//# sourceMappingURL=reply-unchecked-update-one-without-quick-replies.input.js.map
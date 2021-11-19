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
exports.ReplyUncheckedUpdateManyWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_user_input_1 = require("./reply-create-without-user.input");
const reply_create_or_connect_without_user_input_1 = require("./reply-create-or-connect-without-user.input");
const reply_upsert_with_where_unique_without_user_input_1 = require("./reply-upsert-with-where-unique-without-user.input");
const reply_create_many_user_input_envelope_input_1 = require("./reply-create-many-user-input-envelope.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_with_where_unique_without_user_input_1 = require("./reply-update-with-where-unique-without-user.input");
const reply_update_many_with_where_without_user_input_1 = require("./reply-update-many-with-where-without-user.input");
const reply_scalar_where_input_1 = require("./reply-scalar-where.input");
let ReplyUncheckedUpdateManyWithoutUserInput = class ReplyUncheckedUpdateManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [reply_create_without_user_input_1.ReplyCreateWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_create_or_connect_without_user_input_1.ReplyCreateOrConnectWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_upsert_with_where_unique_without_user_input_1.ReplyUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_many_user_input_envelope_input_1.ReplyCreateManyUserInputEnvelope, { nullable: true }),
    __metadata("design:type", reply_create_many_user_input_envelope_input_1.ReplyCreateManyUserInputEnvelope)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_update_with_where_unique_without_user_input_1.ReplyUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_update_many_with_where_without_user_input_1.ReplyUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_scalar_where_input_1.ReplyScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUncheckedUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
ReplyUncheckedUpdateManyWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUncheckedUpdateManyWithoutUserInput);
exports.ReplyUncheckedUpdateManyWithoutUserInput = ReplyUncheckedUpdateManyWithoutUserInput;
//# sourceMappingURL=reply-unchecked-update-many-without-user.input.js.map
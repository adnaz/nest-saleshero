"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateWithoutAvatarInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_nested_many_without_user_input_1 = require("../reply/reply-create-nested-many-without-user.input");
let ActorCreateWithoutAvatarInput = class ActorCreateWithoutAvatarInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ActorCreateWithoutAvatarInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorCreateWithoutAvatarInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorCreateWithoutAvatarInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_many_without_user_input_1.ReplyCreateNestedManyWithoutUserInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_many_without_user_input_1.ReplyCreateNestedManyWithoutUserInput)
], ActorCreateWithoutAvatarInput.prototype, "replies", void 0);
ActorCreateWithoutAvatarInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateWithoutAvatarInput);
exports.ActorCreateWithoutAvatarInput = ActorCreateWithoutAvatarInput;

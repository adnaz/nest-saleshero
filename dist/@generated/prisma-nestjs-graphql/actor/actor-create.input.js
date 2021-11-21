"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_nested_one_without_actor_input_1 = require("../file/file-create-nested-one-without-actor.input");
const reply_create_nested_many_without_user_input_1 = require("../reply/reply-create-nested-many-without-user.input");
let ActorCreateInput = class ActorCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ActorCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_actor_input_1.FileCreateNestedOneWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_actor_input_1.FileCreateNestedOneWithoutActorInput)
], ActorCreateInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_nested_many_without_user_input_1.ReplyCreateNestedManyWithoutUserInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_nested_many_without_user_input_1.ReplyCreateNestedManyWithoutUserInput)
], ActorCreateInput.prototype, "replies", void 0);
ActorCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateInput);
exports.ActorCreateInput = ActorCreateInput;

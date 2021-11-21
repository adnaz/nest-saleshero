"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateNestedOneWithoutAvatarInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_without_avatar_input_1 = require("./actor-create-without-avatar.input");
const actor_create_or_connect_without_avatar_input_1 = require("./actor-create-or-connect-without-avatar.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
let ActorCreateNestedOneWithoutAvatarInput = class ActorCreateNestedOneWithoutAvatarInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput)
], ActorCreateNestedOneWithoutAvatarInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_or_connect_without_avatar_input_1.ActorCreateOrConnectWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_or_connect_without_avatar_input_1.ActorCreateOrConnectWithoutAvatarInput)
], ActorCreateNestedOneWithoutAvatarInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorCreateNestedOneWithoutAvatarInput.prototype, "connect", void 0);
ActorCreateNestedOneWithoutAvatarInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateNestedOneWithoutAvatarInput);
exports.ActorCreateNestedOneWithoutAvatarInput = ActorCreateNestedOneWithoutAvatarInput;

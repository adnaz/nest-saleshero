"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateOrConnectWithoutAvatarInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_create_without_avatar_input_1 = require("./actor-create-without-avatar.input");
let ActorCreateOrConnectWithoutAvatarInput = class ActorCreateOrConnectWithoutAvatarInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorCreateOrConnectWithoutAvatarInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput)
], ActorCreateOrConnectWithoutAvatarInput.prototype, "create", void 0);
ActorCreateOrConnectWithoutAvatarInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateOrConnectWithoutAvatarInput);
exports.ActorCreateOrConnectWithoutAvatarInput = ActorCreateOrConnectWithoutAvatarInput;

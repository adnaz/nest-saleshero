"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUpsertWithoutAvatarInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_update_without_avatar_input_1 = require("./actor-update-without-avatar.input");
const actor_create_without_avatar_input_1 = require("./actor-create-without-avatar.input");
let ActorUpsertWithoutAvatarInput = class ActorUpsertWithoutAvatarInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput)
], ActorUpsertWithoutAvatarInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput)
], ActorUpsertWithoutAvatarInput.prototype, "create", void 0);
ActorUpsertWithoutAvatarInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUpsertWithoutAvatarInput);
exports.ActorUpsertWithoutAvatarInput = ActorUpsertWithoutAvatarInput;

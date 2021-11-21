"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUpdateOneWithoutAvatarInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_without_avatar_input_1 = require("./actor-create-without-avatar.input");
const actor_create_or_connect_without_avatar_input_1 = require("./actor-create-or-connect-without-avatar.input");
const actor_upsert_without_avatar_input_1 = require("./actor-upsert-without-avatar.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_update_without_avatar_input_1 = require("./actor-update-without-avatar.input");
let ActorUpdateOneWithoutAvatarInput = class ActorUpdateOneWithoutAvatarInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_or_connect_without_avatar_input_1.ActorCreateOrConnectWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_or_connect_without_avatar_input_1.ActorCreateOrConnectWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_upsert_without_avatar_input_1.ActorUpsertWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_upsert_without_avatar_input_1.ActorUpsertWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActorUpdateOneWithoutAvatarInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActorUpdateOneWithoutAvatarInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "update", void 0);
ActorUpdateOneWithoutAvatarInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUpdateOneWithoutAvatarInput);
exports.ActorUpdateOneWithoutAvatarInput = ActorUpdateOneWithoutAvatarInput;

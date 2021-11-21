"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUpdateOneWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_without_replies_input_1 = require("./actor-create-without-replies.input");
const actor_create_or_connect_without_replies_input_1 = require("./actor-create-or-connect-without-replies.input");
const actor_upsert_without_replies_input_1 = require("./actor-upsert-without-replies.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_update_without_replies_input_1 = require("./actor-update-without-replies.input");
let ActorUpdateOneWithoutRepliesInput = class ActorUpdateOneWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_or_connect_without_replies_input_1.ActorCreateOrConnectWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_or_connect_without_replies_input_1.ActorCreateOrConnectWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_upsert_without_replies_input_1.ActorUpsertWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_upsert_without_replies_input_1.ActorUpsertWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActorUpdateOneWithoutRepliesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActorUpdateOneWithoutRepliesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_without_replies_input_1.ActorUpdateWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_update_without_replies_input_1.ActorUpdateWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "update", void 0);
ActorUpdateOneWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUpdateOneWithoutRepliesInput);
exports.ActorUpdateOneWithoutRepliesInput = ActorUpdateOneWithoutRepliesInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUpsertWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_update_without_replies_input_1 = require("./actor-update-without-replies.input");
const actor_create_without_replies_input_1 = require("./actor-create-without-replies.input");
let ActorUpsertWithoutRepliesInput = class ActorUpsertWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_without_replies_input_1.ActorUpdateWithoutRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_update_without_replies_input_1.ActorUpdateWithoutRepliesInput)
], ActorUpsertWithoutRepliesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput)
], ActorUpsertWithoutRepliesInput.prototype, "create", void 0);
ActorUpsertWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUpsertWithoutRepliesInput);
exports.ActorUpsertWithoutRepliesInput = ActorUpsertWithoutRepliesInput;

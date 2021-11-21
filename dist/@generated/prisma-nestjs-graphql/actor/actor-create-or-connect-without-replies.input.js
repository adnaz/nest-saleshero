"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateOrConnectWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_create_without_replies_input_1 = require("./actor-create-without-replies.input");
let ActorCreateOrConnectWithoutRepliesInput = class ActorCreateOrConnectWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorCreateOrConnectWithoutRepliesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput)
], ActorCreateOrConnectWithoutRepliesInput.prototype, "create", void 0);
ActorCreateOrConnectWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateOrConnectWithoutRepliesInput);
exports.ActorCreateOrConnectWithoutRepliesInput = ActorCreateOrConnectWithoutRepliesInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateNestedOneWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_without_replies_input_1 = require("./actor-create-without-replies.input");
const actor_create_or_connect_without_replies_input_1 = require("./actor-create-or-connect-without-replies.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
let ActorCreateNestedOneWithoutRepliesInput = class ActorCreateNestedOneWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput)
], ActorCreateNestedOneWithoutRepliesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_or_connect_without_replies_input_1.ActorCreateOrConnectWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_create_or_connect_without_replies_input_1.ActorCreateOrConnectWithoutRepliesInput)
], ActorCreateNestedOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorCreateNestedOneWithoutRepliesInput.prototype, "connect", void 0);
ActorCreateNestedOneWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateNestedOneWithoutRepliesInput);
exports.ActorCreateNestedOneWithoutRepliesInput = ActorCreateNestedOneWithoutRepliesInput;

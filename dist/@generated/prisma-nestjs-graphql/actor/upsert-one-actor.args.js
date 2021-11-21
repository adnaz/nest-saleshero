"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_create_input_1 = require("./actor-create.input");
const actor_update_input_1 = require("./actor-update.input");
let UpsertOneActorArgs = class UpsertOneActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], UpsertOneActorArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_input_1.ActorCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_create_input_1.ActorCreateInput)
], UpsertOneActorArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_input_1.ActorUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_update_input_1.ActorUpdateInput)
], UpsertOneActorArgs.prototype, "update", void 0);
UpsertOneActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneActorArgs);
exports.UpsertOneActorArgs = UpsertOneActorArgs;

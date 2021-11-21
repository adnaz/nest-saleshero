"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_update_input_1 = require("./actor-update.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
let UpdateOneActorArgs = class UpdateOneActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_input_1.ActorUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_update_input_1.ActorUpdateInput)
], UpdateOneActorArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], UpdateOneActorArgs.prototype, "where", void 0);
UpdateOneActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneActorArgs);
exports.UpdateOneActorArgs = UpdateOneActorArgs;

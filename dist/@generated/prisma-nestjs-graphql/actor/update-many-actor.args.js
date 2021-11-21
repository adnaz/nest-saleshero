"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_update_many_mutation_input_1 = require("./actor-update-many-mutation.input");
const actor_where_input_1 = require("./actor-where.input");
let UpdateManyActorArgs = class UpdateManyActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_update_many_mutation_input_1.ActorUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_update_many_mutation_input_1.ActorUpdateManyMutationInput)
], UpdateManyActorArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], UpdateManyActorArgs.prototype, "where", void 0);
UpdateManyActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyActorArgs);
exports.UpdateManyActorArgs = UpdateManyActorArgs;

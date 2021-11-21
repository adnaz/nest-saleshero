"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_input_1 = require("./actor-where.input");
let DeleteManyActorArgs = class DeleteManyActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], DeleteManyActorArgs.prototype, "where", void 0);
DeleteManyActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyActorArgs);
exports.DeleteManyActorArgs = DeleteManyActorArgs;

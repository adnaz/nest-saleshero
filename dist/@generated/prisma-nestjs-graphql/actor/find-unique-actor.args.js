"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
let FindUniqueActorArgs = class FindUniqueActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], FindUniqueActorArgs.prototype, "where", void 0);
FindUniqueActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueActorArgs);
exports.FindUniqueActorArgs = FindUniqueActorArgs;

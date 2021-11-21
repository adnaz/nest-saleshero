"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_input_1 = require("./actor-where.input");
let ActorRelationFilter = class ActorRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], ActorRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], ActorRelationFilter.prototype, "isNot", void 0);
ActorRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorRelationFilter);
exports.ActorRelationFilter = ActorRelationFilter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_input_1 = require("./actor-where.input");
const actor_order_by_with_relation_input_1 = require("./actor-order-by-with-relation.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const actor_scalar_field_enum_1 = require("./actor-scalar-field.enum");
let FindFirstActorArgs = class FindFirstActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_input_1.ActorWhereInput)
], FindFirstActorArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstActorArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], FindFirstActorArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstActorArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstActorArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [actor_scalar_field_enum_1.ActorScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstActorArgs.prototype, "distinct", void 0);
FindFirstActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindFirstActorArgs);
exports.FindFirstActorArgs = FindFirstActorArgs;

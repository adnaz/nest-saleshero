"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstActorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_where_input_1 = require("./actor-where.input");
const actor_order_by_with_relation_input_1 = require("./actor-order-by-with-relation.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const actor_scalar_field_enum_1 = require("./actor-scalar-field.enum");
let FindFirstActorArgs = class FindFirstActorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => actor_where_input_1.ActorWhereInput, { nullable: true }),
    __metadata("design:type", actor_where_input_1.ActorWhereInput)
], FindFirstActorArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstActorArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], FindFirstActorArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstActorArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstActorArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [actor_scalar_field_enum_1.ActorScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstActorArgs.prototype, "distinct", void 0);
FindFirstActorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstActorArgs);
exports.FindFirstActorArgs = FindFirstActorArgs;
//# sourceMappingURL=find-first-actor.args.js.map
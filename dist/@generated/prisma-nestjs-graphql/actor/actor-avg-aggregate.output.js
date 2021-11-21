"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorAvgAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ActorAvgAggregate = class ActorAvgAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorAvgAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorAvgAggregate.prototype, "fileId", void 0);
ActorAvgAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], ActorAvgAggregate);
exports.ActorAvgAggregate = ActorAvgAggregate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCount = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ActorCount = class ActorCount {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorCount.prototype, "replies", void 0);
ActorCount = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], ActorCount);
exports.ActorCount = ActorCount;

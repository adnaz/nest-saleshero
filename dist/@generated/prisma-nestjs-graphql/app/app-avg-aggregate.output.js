"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAvgAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let AppAvgAggregate = class AppAvgAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppAvgAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppAvgAggregate.prototype, "authorId", void 0);
AppAvgAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AppAvgAggregate);
exports.AppAvgAggregate = AppAvgAggregate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAvgAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let UserAvgAggregate = class UserAvgAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserAvgAggregate.prototype, "id", void 0);
UserAvgAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], UserAvgAggregate);
exports.UserAvgAggregate = UserAvgAggregate;

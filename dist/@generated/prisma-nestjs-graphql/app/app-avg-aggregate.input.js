"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let AppAvgAggregateInput = class AppAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppAvgAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppAvgAggregateInput.prototype, "authorId", void 0);
AppAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppAvgAggregateInput);
exports.AppAvgAggregateInput = AppAvgAggregateInput;

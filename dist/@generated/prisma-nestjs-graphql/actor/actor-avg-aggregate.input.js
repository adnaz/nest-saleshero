"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ActorAvgAggregateInput = class ActorAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActorAvgAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ActorAvgAggregateInput.prototype, "fileId", void 0);
ActorAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorAvgAggregateInput);
exports.ActorAvgAggregateInput = ActorAvgAggregateInput;

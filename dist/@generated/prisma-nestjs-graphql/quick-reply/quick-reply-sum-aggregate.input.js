"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplySumAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplySumAggregateInput = class QuickReplySumAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplySumAggregateInput.prototype, "id", void 0);
QuickReplySumAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplySumAggregateInput);
exports.QuickReplySumAggregateInput = QuickReplySumAggregateInput;

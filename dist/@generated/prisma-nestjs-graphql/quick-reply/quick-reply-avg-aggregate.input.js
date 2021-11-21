"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplyAvgAggregateInput = class QuickReplyAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyAvgAggregateInput.prototype, "id", void 0);
QuickReplyAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyAvgAggregateInput);
exports.QuickReplyAvgAggregateInput = QuickReplyAvgAggregateInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplyValueAvgAggregateInput = class QuickReplyValueAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueAvgAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueAvgAggregateInput.prototype, "quickReplyId", void 0);
QuickReplyValueAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueAvgAggregateInput);
exports.QuickReplyValueAvgAggregateInput = QuickReplyValueAvgAggregateInput;

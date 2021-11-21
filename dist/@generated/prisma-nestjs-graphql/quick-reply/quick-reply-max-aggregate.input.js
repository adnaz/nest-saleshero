"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyMaxAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplyMaxAggregateInput = class QuickReplyMaxAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMaxAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMaxAggregateInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMaxAggregateInput.prototype, "type", void 0);
QuickReplyMaxAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyMaxAggregateInput);
exports.QuickReplyMaxAggregateInput = QuickReplyMaxAggregateInput;

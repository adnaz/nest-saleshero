"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyMinAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplyMinAggregateInput = class QuickReplyMinAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMinAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMinAggregateInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMinAggregateInput.prototype, "type", void 0);
QuickReplyMinAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyMinAggregateInput);
exports.QuickReplyMinAggregateInput = QuickReplyMinAggregateInput;

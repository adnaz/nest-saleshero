"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueMinAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplyValueMinAggregateInput = class QuickReplyValueMinAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueMinAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueMinAggregateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueMinAggregateInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyValueMinAggregateInput.prototype, "quickReplyId", void 0);
QuickReplyValueMinAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueMinAggregateInput);
exports.QuickReplyValueMinAggregateInput = QuickReplyValueMinAggregateInput;

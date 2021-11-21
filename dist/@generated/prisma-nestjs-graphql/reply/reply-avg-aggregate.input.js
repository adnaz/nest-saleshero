"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ReplyAvgAggregateInput = class ReplyAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyAvgAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyAvgAggregateInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyAvgAggregateInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyAvgAggregateInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyAvgAggregateInput.prototype, "quickReplyId", void 0);
ReplyAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyAvgAggregateInput);
exports.ReplyAvgAggregateInput = ReplyAvgAggregateInput;

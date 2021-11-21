"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueMaxAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let QuickReplyValueMaxAggregate = class QuickReplyValueMaxAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueMaxAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueMaxAggregate.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueMaxAggregate.prototype, "quickReplyId", void 0);
QuickReplyValueMaxAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], QuickReplyValueMaxAggregate);
exports.QuickReplyValueMaxAggregate = QuickReplyValueMaxAggregate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueCountAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let QuickReplyValueCountAggregate = class QuickReplyValueCountAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueCountAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueCountAggregate.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueCountAggregate.prototype, "quickReplyId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueCountAggregate.prototype, "_all", void 0);
QuickReplyValueCountAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], QuickReplyValueCountAggregate);
exports.QuickReplyValueCountAggregate = QuickReplyValueCountAggregate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyMaxAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
let QuickReplyMaxAggregate = class QuickReplyMaxAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], QuickReplyMaxAggregate.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyMaxAggregate.prototype, "type", void 0);
QuickReplyMaxAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], QuickReplyMaxAggregate);
exports.QuickReplyMaxAggregate = QuickReplyMaxAggregate;

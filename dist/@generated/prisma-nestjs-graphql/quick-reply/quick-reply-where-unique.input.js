"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let QuickReplyWhereUniqueInput = class QuickReplyWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyWhereUniqueInput.prototype, "id", void 0);
QuickReplyWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyWhereUniqueInput);
exports.QuickReplyWhereUniqueInput = QuickReplyWhereUniqueInput;

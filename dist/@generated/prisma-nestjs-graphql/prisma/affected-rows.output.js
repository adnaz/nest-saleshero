"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffectedRows = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let AffectedRows = class AffectedRows {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffectedRows.prototype, "count", void 0);
AffectedRows = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;

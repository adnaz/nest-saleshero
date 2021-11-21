"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let AppCreateManyAuthorInput = class AppCreateManyAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AppCreateManyAuthorInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AppCreateManyAuthorInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppCreateManyAuthorInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppCreateManyAuthorInput.prototype, "updatedAt", void 0);
AppCreateManyAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppCreateManyAuthorInput);
exports.AppCreateManyAuthorInput = AppCreateManyAuthorInput;

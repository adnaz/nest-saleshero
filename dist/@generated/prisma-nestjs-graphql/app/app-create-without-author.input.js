"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let AppCreateWithoutAuthorInput = class AppCreateWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AppCreateWithoutAuthorInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppCreateWithoutAuthorInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
AppCreateWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppCreateWithoutAuthorInput);
exports.AppCreateWithoutAuthorInput = AppCreateWithoutAuthorInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableIntFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let NullableIntFieldUpdateOperationsInput = class NullableIntFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "increment", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "decrement", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "multiply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableIntFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableIntFieldUpdateOperationsInput);
exports.NullableIntFieldUpdateOperationsInput = NullableIntFieldUpdateOperationsInput;

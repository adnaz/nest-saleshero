"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableFloatFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let NullableFloatFieldUpdateOperationsInput = class NullableFloatFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "increment", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "decrement", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "multiply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], NullableFloatFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableFloatFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableFloatFieldUpdateOperationsInput);
exports.NullableFloatFieldUpdateOperationsInput = NullableFloatFieldUpdateOperationsInput;

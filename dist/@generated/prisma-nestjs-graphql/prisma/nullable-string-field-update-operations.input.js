"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableStringFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
NullableStringFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableStringFieldUpdateOperationsInput);
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableBoolFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let NullableBoolFieldUpdateOperationsInput = class NullableBoolFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], NullableBoolFieldUpdateOperationsInput.prototype, "set", void 0);
NullableBoolFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableBoolFieldUpdateOperationsInput);
exports.NullableBoolFieldUpdateOperationsInput = NullableBoolFieldUpdateOperationsInput;

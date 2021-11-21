"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let CreateAppInput = class CreateAppInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateAppInput.prototype, "exampleField", void 0);
CreateAppInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], CreateAppInput);
exports.CreateAppInput = CreateAppInput;

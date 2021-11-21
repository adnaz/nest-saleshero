"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppInput = void 0;
const tslib_1 = require("tslib");
const create_app_input_1 = require("./create-app.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateAppInput = class UpdateAppInput extends (0, graphql_1.PartialType)(create_app_input_1.CreateAppInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateAppInput.prototype, "id", void 0);
UpdateAppInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdateAppInput);
exports.UpdateAppInput = UpdateAppInput;

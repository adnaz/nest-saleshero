"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_create_input_1 = require("./app-create.input");
let CreateOneAppArgs = class CreateOneAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_create_input_1.AppCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_create_input_1.AppCreateInput)
], CreateOneAppArgs.prototype, "data", void 0);
CreateOneAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneAppArgs);
exports.CreateOneAppArgs = CreateOneAppArgs;

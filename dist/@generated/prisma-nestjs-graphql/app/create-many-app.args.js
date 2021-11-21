"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_create_many_input_1 = require("./app-create-many.input");
let CreateManyAppArgs = class CreateManyAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_create_many_input_1.AppCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyAppArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyAppArgs.prototype, "skipDuplicates", void 0);
CreateManyAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyAppArgs);
exports.CreateManyAppArgs = CreateManyAppArgs;

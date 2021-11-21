"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
let DeleteManyAppArgs = class DeleteManyAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], DeleteManyAppArgs.prototype, "where", void 0);
DeleteManyAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyAppArgs);
exports.DeleteManyAppArgs = DeleteManyAppArgs;

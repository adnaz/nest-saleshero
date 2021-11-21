"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_unique_input_1 = require("./app-where-unique.input");
const app_create_input_1 = require("./app-create.input");
const app_update_input_1 = require("./app-update.input");
let UpsertOneAppArgs = class UpsertOneAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], UpsertOneAppArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_create_input_1.AppCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_create_input_1.AppCreateInput)
], UpsertOneAppArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_update_input_1.AppUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_update_input_1.AppUpdateInput)
], UpsertOneAppArgs.prototype, "update", void 0);
UpsertOneAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneAppArgs);
exports.UpsertOneAppArgs = UpsertOneAppArgs;

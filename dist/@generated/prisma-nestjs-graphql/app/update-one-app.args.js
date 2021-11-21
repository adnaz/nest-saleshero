"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_update_input_1 = require("./app-update.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
let UpdateOneAppArgs = class UpdateOneAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_update_input_1.AppUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_update_input_1.AppUpdateInput)
], UpdateOneAppArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], UpdateOneAppArgs.prototype, "where", void 0);
UpdateOneAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneAppArgs);
exports.UpdateOneAppArgs = UpdateOneAppArgs;

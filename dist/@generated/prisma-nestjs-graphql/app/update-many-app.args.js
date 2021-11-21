"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_update_many_mutation_input_1 = require("./app-update-many-mutation.input");
const app_where_input_1 = require("./app-where.input");
let UpdateManyAppArgs = class UpdateManyAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_update_many_mutation_input_1.AppUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_update_many_mutation_input_1.AppUpdateManyMutationInput)
], UpdateManyAppArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], UpdateManyAppArgs.prototype, "where", void 0);
UpdateManyAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyAppArgs);
exports.UpdateManyAppArgs = UpdateManyAppArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppListRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
let AppListRelationFilter = class AppListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], AppListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], AppListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], AppListRelationFilter.prototype, "none", void 0);
AppListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppListRelationFilter);
exports.AppListRelationFilter = AppListRelationFilter;

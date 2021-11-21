"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
let FileRelationFilter = class FileRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], FileRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], FileRelationFilter.prototype, "isNot", void 0);
FileRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileRelationFilter);
exports.FileRelationFilter = FileRelationFilter;

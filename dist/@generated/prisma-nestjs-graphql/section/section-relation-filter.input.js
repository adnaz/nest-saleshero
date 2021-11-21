"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
let SectionRelationFilter = class SectionRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionRelationFilter.prototype, "isNot", void 0);
SectionRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionRelationFilter);
exports.SectionRelationFilter = SectionRelationFilter;

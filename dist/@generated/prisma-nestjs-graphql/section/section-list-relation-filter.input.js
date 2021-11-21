"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
let SectionListRelationFilter = class SectionListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], SectionListRelationFilter.prototype, "none", void 0);
SectionListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionListRelationFilter);
exports.SectionListRelationFilter = SectionListRelationFilter;

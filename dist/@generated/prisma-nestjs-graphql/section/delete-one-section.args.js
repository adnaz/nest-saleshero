"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
let DeleteOneSectionArgs = class DeleteOneSectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], DeleteOneSectionArgs.prototype, "where", void 0);
DeleteOneSectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOneSectionArgs);
exports.DeleteOneSectionArgs = DeleteOneSectionArgs;

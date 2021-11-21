"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
let DeleteManySectionArgs = class DeleteManySectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], DeleteManySectionArgs.prototype, "where", void 0);
DeleteManySectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManySectionArgs);
exports.DeleteManySectionArgs = DeleteManySectionArgs;

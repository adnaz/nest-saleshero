"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_create_input_1 = require("./section-create.input");
const section_update_input_1 = require("./section-update.input");
let UpsertOneSectionArgs = class UpsertOneSectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], UpsertOneSectionArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_input_1.SectionCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_input_1.SectionCreateInput)
], UpsertOneSectionArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_input_1.SectionUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_input_1.SectionUpdateInput)
], UpsertOneSectionArgs.prototype, "update", void 0);
UpsertOneSectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneSectionArgs);
exports.UpsertOneSectionArgs = UpsertOneSectionArgs;

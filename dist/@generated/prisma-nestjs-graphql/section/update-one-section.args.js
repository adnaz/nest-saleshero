"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_update_input_1 = require("./section-update.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let UpdateOneSectionArgs = class UpdateOneSectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_input_1.SectionUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_input_1.SectionUpdateInput)
], UpdateOneSectionArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], UpdateOneSectionArgs.prototype, "where", void 0);
UpdateOneSectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneSectionArgs);
exports.UpdateOneSectionArgs = UpdateOneSectionArgs;

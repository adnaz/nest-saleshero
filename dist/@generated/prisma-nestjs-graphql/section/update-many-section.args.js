"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_update_many_mutation_input_1 = require("./section-update-many-mutation.input");
const section_where_input_1 = require("./section-where.input");
let UpdateManySectionArgs = class UpdateManySectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_many_mutation_input_1.SectionUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_many_mutation_input_1.SectionUpdateManyMutationInput)
], UpdateManySectionArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], UpdateManySectionArgs.prototype, "where", void 0);
UpdateManySectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManySectionArgs);
exports.UpdateManySectionArgs = UpdateManySectionArgs;

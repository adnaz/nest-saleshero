"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
const affirmation_create_input_1 = require("./affirmation-create.input");
const affirmation_update_input_1 = require("./affirmation-update.input");
let UpsertOneAffirmationArgs = class UpsertOneAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], UpsertOneAffirmationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_input_1.AffirmationCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_input_1.AffirmationCreateInput)
], UpsertOneAffirmationArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_update_input_1.AffirmationUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_update_input_1.AffirmationUpdateInput)
], UpsertOneAffirmationArgs.prototype, "update", void 0);
UpsertOneAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneAffirmationArgs);
exports.UpsertOneAffirmationArgs = UpsertOneAffirmationArgs;

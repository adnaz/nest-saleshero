"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_update_many_mutation_input_1 = require("./affirmation-update-many-mutation.input");
const affirmation_where_input_1 = require("./affirmation-where.input");
let UpdateManyAffirmationArgs = class UpdateManyAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_update_many_mutation_input_1.AffirmationUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_update_many_mutation_input_1.AffirmationUpdateManyMutationInput)
], UpdateManyAffirmationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], UpdateManyAffirmationArgs.prototype, "where", void 0);
UpdateManyAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyAffirmationArgs);
exports.UpdateManyAffirmationArgs = UpdateManyAffirmationArgs;

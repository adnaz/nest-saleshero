"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_update_input_1 = require("./affirmation-update.input");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
let UpdateOneAffirmationArgs = class UpdateOneAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_update_input_1.AffirmationUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_update_input_1.AffirmationUpdateInput)
], UpdateOneAffirmationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], UpdateOneAffirmationArgs.prototype, "where", void 0);
UpdateOneAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneAffirmationArgs);
exports.UpdateOneAffirmationArgs = UpdateOneAffirmationArgs;

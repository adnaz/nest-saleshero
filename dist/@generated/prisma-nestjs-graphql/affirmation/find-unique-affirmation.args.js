"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
let FindUniqueAffirmationArgs = class FindUniqueAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], FindUniqueAffirmationArgs.prototype, "where", void 0);
FindUniqueAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueAffirmationArgs);
exports.FindUniqueAffirmationArgs = FindUniqueAffirmationArgs;

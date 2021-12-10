"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_input_1 = require("./affirmation-where.input");
let DeleteManyAffirmationArgs = class DeleteManyAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], DeleteManyAffirmationArgs.prototype, "where", void 0);
DeleteManyAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyAffirmationArgs);
exports.DeleteManyAffirmationArgs = DeleteManyAffirmationArgs;

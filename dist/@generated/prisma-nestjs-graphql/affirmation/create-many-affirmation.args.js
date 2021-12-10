"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_create_many_input_1 = require("./affirmation-create-many.input");
let CreateManyAffirmationArgs = class CreateManyAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [affirmation_create_many_input_1.AffirmationCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyAffirmationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyAffirmationArgs.prototype, "skipDuplicates", void 0);
CreateManyAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyAffirmationArgs);
exports.CreateManyAffirmationArgs = CreateManyAffirmationArgs;

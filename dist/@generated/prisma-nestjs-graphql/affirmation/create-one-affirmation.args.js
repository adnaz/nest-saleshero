"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_create_input_1 = require("./affirmation-create.input");
let CreateOneAffirmationArgs = class CreateOneAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_input_1.AffirmationCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_input_1.AffirmationCreateInput)
], CreateOneAffirmationArgs.prototype, "data", void 0);
CreateOneAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneAffirmationArgs);
exports.CreateOneAffirmationArgs = CreateOneAffirmationArgs;

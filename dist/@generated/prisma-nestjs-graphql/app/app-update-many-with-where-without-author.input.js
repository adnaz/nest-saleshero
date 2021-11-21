"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_scalar_where_input_1 = require("./app-scalar-where.input");
const app_update_many_mutation_input_1 = require("./app-update-many-mutation.input");
let AppUpdateManyWithWhereWithoutAuthorInput = class AppUpdateManyWithWhereWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_scalar_where_input_1.AppScalarWhereInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_scalar_where_input_1.AppScalarWhereInput)
], AppUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_update_many_mutation_input_1.AppUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_update_many_mutation_input_1.AppUpdateManyMutationInput)
], AppUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
AppUpdateManyWithWhereWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppUpdateManyWithWhereWithoutAuthorInput);
exports.AppUpdateManyWithWhereWithoutAuthorInput = AppUpdateManyWithWhereWithoutAuthorInput;

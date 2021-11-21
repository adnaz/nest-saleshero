"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_unique_input_1 = require("./app-where-unique.input");
const app_create_without_author_input_1 = require("./app-create-without-author.input");
let AppCreateOrConnectWithoutAuthorInput = class AppCreateOrConnectWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], AppCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_create_without_author_input_1.AppCreateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_create_without_author_input_1.AppCreateWithoutAuthorInput)
], AppCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
AppCreateOrConnectWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppCreateOrConnectWithoutAuthorInput);
exports.AppCreateOrConnectWithoutAuthorInput = AppCreateOrConnectWithoutAuthorInput;

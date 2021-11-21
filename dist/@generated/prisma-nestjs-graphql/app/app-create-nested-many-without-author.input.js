"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_create_without_author_input_1 = require("./app-create-without-author.input");
const app_create_or_connect_without_author_input_1 = require("./app-create-or-connect-without-author.input");
const app_create_many_author_input_envelope_input_1 = require("./app-create-many-author-input-envelope.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
let AppCreateNestedManyWithoutAuthorInput = class AppCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_create_without_author_input_1.AppCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_create_or_connect_without_author_input_1.AppCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_create_many_author_input_envelope_input_1.AppCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_create_many_author_input_envelope_input_1.AppCreateManyAuthorInputEnvelope)
], AppCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_where_unique_input_1.AppWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
AppCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppCreateNestedManyWithoutAuthorInput);
exports.AppCreateNestedManyWithoutAuthorInput = AppCreateNestedManyWithoutAuthorInput;

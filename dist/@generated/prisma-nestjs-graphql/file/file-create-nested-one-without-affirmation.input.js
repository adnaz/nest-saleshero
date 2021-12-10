"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedOneWithoutAffirmationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_affirmation_input_1 = require("./file-create-without-affirmation.input");
const file_create_or_connect_without_affirmation_input_1 = require("./file-create-or-connect-without-affirmation.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let FileCreateNestedOneWithoutAffirmationInput = class FileCreateNestedOneWithoutAffirmationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_affirmation_input_1.FileCreateWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_affirmation_input_1.FileCreateWithoutAffirmationInput)
], FileCreateNestedOneWithoutAffirmationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_affirmation_input_1.FileCreateOrConnectWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_affirmation_input_1.FileCreateOrConnectWithoutAffirmationInput)
], FileCreateNestedOneWithoutAffirmationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateNestedOneWithoutAffirmationInput.prototype, "connect", void 0);
FileCreateNestedOneWithoutAffirmationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateNestedOneWithoutAffirmationInput);
exports.FileCreateNestedOneWithoutAffirmationInput = FileCreateNestedOneWithoutAffirmationInput;

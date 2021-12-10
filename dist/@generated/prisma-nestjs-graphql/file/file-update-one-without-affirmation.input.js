"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutAffirmationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_affirmation_input_1 = require("./file-create-without-affirmation.input");
const file_create_or_connect_without_affirmation_input_1 = require("./file-create-or-connect-without-affirmation.input");
const file_upsert_without_affirmation_input_1 = require("./file-upsert-without-affirmation.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_affirmation_input_1 = require("./file-update-without-affirmation.input");
let FileUpdateOneWithoutAffirmationInput = class FileUpdateOneWithoutAffirmationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_affirmation_input_1.FileCreateWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_affirmation_input_1.FileCreateWithoutAffirmationInput)
], FileUpdateOneWithoutAffirmationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_affirmation_input_1.FileCreateOrConnectWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_affirmation_input_1.FileCreateOrConnectWithoutAffirmationInput)
], FileUpdateOneWithoutAffirmationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_upsert_without_affirmation_input_1.FileUpsertWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_upsert_without_affirmation_input_1.FileUpsertWithoutAffirmationInput)
], FileUpdateOneWithoutAffirmationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutAffirmationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutAffirmationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutAffirmationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_affirmation_input_1.FileUpdateWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_without_affirmation_input_1.FileUpdateWithoutAffirmationInput)
], FileUpdateOneWithoutAffirmationInput.prototype, "update", void 0);
FileUpdateOneWithoutAffirmationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutAffirmationInput);
exports.FileUpdateOneWithoutAffirmationInput = FileUpdateOneWithoutAffirmationInput;

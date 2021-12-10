"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithoutAffirmationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_affirmation_input_1 = require("./file-update-without-affirmation.input");
const file_create_without_affirmation_input_1 = require("./file-create-without-affirmation.input");
let FileUpsertWithoutAffirmationInput = class FileUpsertWithoutAffirmationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_affirmation_input_1.FileUpdateWithoutAffirmationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_without_affirmation_input_1.FileUpdateWithoutAffirmationInput)
], FileUpsertWithoutAffirmationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_affirmation_input_1.FileCreateWithoutAffirmationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_affirmation_input_1.FileCreateWithoutAffirmationInput)
], FileUpsertWithoutAffirmationInput.prototype, "create", void 0);
FileUpsertWithoutAffirmationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpsertWithoutAffirmationInput);
exports.FileUpsertWithoutAffirmationInput = FileUpsertWithoutAffirmationInput;

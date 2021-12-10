"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationUpsertWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_update_without_image_input_1 = require("./affirmation-update-without-image.input");
const affirmation_create_without_image_input_1 = require("./affirmation-create-without-image.input");
let AffirmationUpsertWithoutImageInput = class AffirmationUpsertWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_update_without_image_input_1.AffirmationUpdateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_update_without_image_input_1.AffirmationUpdateWithoutImageInput)
], AffirmationUpsertWithoutImageInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput)
], AffirmationUpsertWithoutImageInput.prototype, "create", void 0);
AffirmationUpsertWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationUpsertWithoutImageInput);
exports.AffirmationUpsertWithoutImageInput = AffirmationUpsertWithoutImageInput;

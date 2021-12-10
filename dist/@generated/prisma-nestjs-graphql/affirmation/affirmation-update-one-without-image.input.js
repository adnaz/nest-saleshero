"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationUpdateOneWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_create_without_image_input_1 = require("./affirmation-create-without-image.input");
const affirmation_create_or_connect_without_image_input_1 = require("./affirmation-create-or-connect-without-image.input");
const affirmation_upsert_without_image_input_1 = require("./affirmation-upsert-without-image.input");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
const affirmation_update_without_image_input_1 = require("./affirmation-update-without-image.input");
let AffirmationUpdateOneWithoutImageInput = class AffirmationUpdateOneWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput)
], AffirmationUpdateOneWithoutImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_or_connect_without_image_input_1.AffirmationCreateOrConnectWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_or_connect_without_image_input_1.AffirmationCreateOrConnectWithoutImageInput)
], AffirmationUpdateOneWithoutImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_upsert_without_image_input_1.AffirmationUpsertWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_upsert_without_image_input_1.AffirmationUpsertWithoutImageInput)
], AffirmationUpdateOneWithoutImageInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationUpdateOneWithoutImageInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationUpdateOneWithoutImageInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], AffirmationUpdateOneWithoutImageInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_update_without_image_input_1.AffirmationUpdateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_update_without_image_input_1.AffirmationUpdateWithoutImageInput)
], AffirmationUpdateOneWithoutImageInput.prototype, "update", void 0);
AffirmationUpdateOneWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationUpdateOneWithoutImageInput);
exports.AffirmationUpdateOneWithoutImageInput = AffirmationUpdateOneWithoutImageInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationCreateOrConnectWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
const affirmation_create_without_image_input_1 = require("./affirmation-create-without-image.input");
let AffirmationCreateOrConnectWithoutImageInput = class AffirmationCreateOrConnectWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], AffirmationCreateOrConnectWithoutImageInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput)
], AffirmationCreateOrConnectWithoutImageInput.prototype, "create", void 0);
AffirmationCreateOrConnectWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationCreateOrConnectWithoutImageInput);
exports.AffirmationCreateOrConnectWithoutImageInput = AffirmationCreateOrConnectWithoutImageInput;

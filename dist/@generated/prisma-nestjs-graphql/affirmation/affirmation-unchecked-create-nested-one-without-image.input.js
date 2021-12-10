"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationUncheckedCreateNestedOneWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_create_without_image_input_1 = require("./affirmation-create-without-image.input");
const affirmation_create_or_connect_without_image_input_1 = require("./affirmation-create-or-connect-without-image.input");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
let AffirmationUncheckedCreateNestedOneWithoutImageInput = class AffirmationUncheckedCreateNestedOneWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_without_image_input_1.AffirmationCreateWithoutImageInput)
], AffirmationUncheckedCreateNestedOneWithoutImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_create_or_connect_without_image_input_1.AffirmationCreateOrConnectWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_create_or_connect_without_image_input_1.AffirmationCreateOrConnectWithoutImageInput)
], AffirmationUncheckedCreateNestedOneWithoutImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], AffirmationUncheckedCreateNestedOneWithoutImageInput.prototype, "connect", void 0);
AffirmationUncheckedCreateNestedOneWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationUncheckedCreateNestedOneWithoutImageInput);
exports.AffirmationUncheckedCreateNestedOneWithoutImageInput = AffirmationUncheckedCreateNestedOneWithoutImageInput;

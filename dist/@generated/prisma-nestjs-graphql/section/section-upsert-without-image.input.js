"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpsertWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_update_without_image_input_1 = require("./section-update-without-image.input");
const section_create_without_image_input_1 = require("./section-create-without-image.input");
let SectionUpsertWithoutImageInput = class SectionUpsertWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_without_image_input_1.SectionUpdateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_without_image_input_1.SectionUpdateWithoutImageInput)
], SectionUpsertWithoutImageInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_image_input_1.SectionCreateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_without_image_input_1.SectionCreateWithoutImageInput)
], SectionUpsertWithoutImageInput.prototype, "create", void 0);
SectionUpsertWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpsertWithoutImageInput);
exports.SectionUpsertWithoutImageInput = SectionUpsertWithoutImageInput;

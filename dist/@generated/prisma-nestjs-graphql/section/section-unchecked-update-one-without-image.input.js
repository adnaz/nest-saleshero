"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUncheckedUpdateOneWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_image_input_1 = require("./section-create-without-image.input");
const section_create_or_connect_without_image_input_1 = require("./section-create-or-connect-without-image.input");
const section_upsert_without_image_input_1 = require("./section-upsert-without-image.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_without_image_input_1 = require("./section-update-without-image.input");
let SectionUncheckedUpdateOneWithoutImageInput = class SectionUncheckedUpdateOneWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_image_input_1.SectionCreateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_without_image_input_1.SectionCreateWithoutImageInput)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_or_connect_without_image_input_1.SectionCreateOrConnectWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_or_connect_without_image_input_1.SectionCreateOrConnectWithoutImageInput)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_upsert_without_image_input_1.SectionUpsertWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_upsert_without_image_input_1.SectionUpsertWithoutImageInput)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_without_image_input_1.SectionUpdateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_without_image_input_1.SectionUpdateWithoutImageInput)
], SectionUncheckedUpdateOneWithoutImageInput.prototype, "update", void 0);
SectionUncheckedUpdateOneWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUncheckedUpdateOneWithoutImageInput);
exports.SectionUncheckedUpdateOneWithoutImageInput = SectionUncheckedUpdateOneWithoutImageInput;

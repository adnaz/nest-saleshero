"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUncheckedCreateNestedOneWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_image_input_1 = require("./section-create-without-image.input");
const section_create_or_connect_without_image_input_1 = require("./section-create-or-connect-without-image.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let SectionUncheckedCreateNestedOneWithoutImageInput = class SectionUncheckedCreateNestedOneWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_image_input_1.SectionCreateWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_without_image_input_1.SectionCreateWithoutImageInput)
], SectionUncheckedCreateNestedOneWithoutImageInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_or_connect_without_image_input_1.SectionCreateOrConnectWithoutImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_or_connect_without_image_input_1.SectionCreateOrConnectWithoutImageInput)
], SectionUncheckedCreateNestedOneWithoutImageInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionUncheckedCreateNestedOneWithoutImageInput.prototype, "connect", void 0);
SectionUncheckedCreateNestedOneWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUncheckedCreateNestedOneWithoutImageInput);
exports.SectionUncheckedCreateNestedOneWithoutImageInput = SectionUncheckedCreateNestedOneWithoutImageInput;

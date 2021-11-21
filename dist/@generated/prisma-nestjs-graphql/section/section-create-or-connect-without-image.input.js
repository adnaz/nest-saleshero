"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateOrConnectWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_create_without_image_input_1 = require("./section-create-without-image.input");
let SectionCreateOrConnectWithoutImageInput = class SectionCreateOrConnectWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionCreateOrConnectWithoutImageInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_image_input_1.SectionCreateWithoutImageInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_without_image_input_1.SectionCreateWithoutImageInput)
], SectionCreateOrConnectWithoutImageInput.prototype, "create", void 0);
SectionCreateOrConnectWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateOrConnectWithoutImageInput);
exports.SectionCreateOrConnectWithoutImageInput = SectionCreateOrConnectWithoutImageInput;

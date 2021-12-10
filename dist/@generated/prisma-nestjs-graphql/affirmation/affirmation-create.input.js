"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_affirmation_input_1 = require("../file/file-create-nested-one-without-affirmation.input");
let AffirmationCreateInput = class AffirmationCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationCreateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], AffirmationCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AffirmationCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationCreateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_affirmation_input_1.FileCreateNestedOneWithoutAffirmationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_affirmation_input_1.FileCreateNestedOneWithoutAffirmationInput)
], AffirmationCreateInput.prototype, "image", void 0);
AffirmationCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationCreateInput);
exports.AffirmationCreateInput = AffirmationCreateInput;

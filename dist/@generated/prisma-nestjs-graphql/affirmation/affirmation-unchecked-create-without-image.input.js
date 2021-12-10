"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationUncheckedCreateWithoutImageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
let AffirmationUncheckedCreateWithoutImageInput = class AffirmationUncheckedCreateWithoutImageInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationUncheckedCreateWithoutImageInput.prototype, "updatedAt", void 0);
AffirmationUncheckedCreateWithoutImageInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationUncheckedCreateWithoutImageInput);
exports.AffirmationUncheckedCreateWithoutImageInput = AffirmationUncheckedCreateWithoutImageInput;

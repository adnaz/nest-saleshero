"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affirmation = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const file_model_1 = require("../file/file.model");
const graphql_5 = require("@nestjs/graphql");
let Affirmation = class Affirmation {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Affirmation.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Affirmation.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Affirmation.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Affirmation.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_model_1.File)
], Affirmation.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Affirmation.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Affirmation.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Affirmation.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Affirmation.prototype, "updatedAt", void 0);
Affirmation = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Affirmation);
exports.Affirmation = Affirmation;

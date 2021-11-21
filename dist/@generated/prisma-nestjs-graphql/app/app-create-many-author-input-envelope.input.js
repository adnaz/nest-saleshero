"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_create_many_author_input_1 = require("./app-create-many-author.input");
let AppCreateManyAuthorInputEnvelope = class AppCreateManyAuthorInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_create_many_author_input_1.AppCreateManyAuthorInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppCreateManyAuthorInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AppCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
AppCreateManyAuthorInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppCreateManyAuthorInputEnvelope);
exports.AppCreateManyAuthorInputEnvelope = AppCreateManyAuthorInputEnvelope;

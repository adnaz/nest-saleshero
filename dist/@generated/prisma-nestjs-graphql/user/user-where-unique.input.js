"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Validator = (0, tslib_1.__importStar)(require("class-validator"));
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereUniqueInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    Validator.MinLength(3),
    (0, tslib_1.__metadata)("design:type", String)
], UserWhereUniqueInput.prototype, "username", void 0);
UserWhereUniqueInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;

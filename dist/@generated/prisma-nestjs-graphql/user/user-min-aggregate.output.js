"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
let UserMinAggregate = class UserMinAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserMinAggregate.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserMinAggregate.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserMinAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserMinAggregate.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserMinAggregate.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserMinAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserMinAggregate.prototype, "updatedAt", void 0);
UserMinAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], UserMinAggregate);
exports.UserMinAggregate = UserMinAggregate;

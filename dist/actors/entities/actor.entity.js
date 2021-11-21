"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let Actor = class Actor {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Number)
], Actor.prototype, "exampleField", void 0);
Actor = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Actor);
exports.Actor = Actor;

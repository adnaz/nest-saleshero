"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let App = class App {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Number)
], App.prototype, "exampleField", void 0);
App = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], App);
exports.App = App;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let Section = class Section {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Number)
], Section.prototype, "exampleField", void 0);
Section = (0, tslib_1.__decorate)([
    (0, graphql_1.ObjectType)()
], Section);
exports.Section = Section;

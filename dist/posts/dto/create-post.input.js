"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let CreatePostInput = class CreatePostInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    (0, tslib_1.__metadata)("design:type", Number)
], CreatePostInput.prototype, "exampleField", void 0);
CreatePostInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;

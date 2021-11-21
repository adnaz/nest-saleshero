"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInput = void 0;
const tslib_1 = require("tslib");
const create_post_input_1 = require("./create-post.input");
const graphql_1 = require("@nestjs/graphql");
let UpdatePostInput = class UpdatePostInput extends (0, graphql_1.PartialType)(create_post_input_1.CreatePostInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdatePostInput.prototype, "id", void 0);
UpdatePostInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdatePostInput);
exports.UpdatePostInput = UpdatePostInput;

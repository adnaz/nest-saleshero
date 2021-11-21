"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_many_author_input_1 = require("./post-create-many-author.input");
let PostCreateManyAuthorInputEnvelope = class PostCreateManyAuthorInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_create_many_author_input_1.PostCreateManyAuthorInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateManyAuthorInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
PostCreateManyAuthorInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostCreateManyAuthorInputEnvelope);
exports.PostCreateManyAuthorInputEnvelope = PostCreateManyAuthorInputEnvelope;

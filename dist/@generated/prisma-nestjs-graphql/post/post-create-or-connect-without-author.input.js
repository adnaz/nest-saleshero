"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
let PostCreateOrConnectWithoutAuthorInput = class PostCreateOrConnectWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_without_author_input_1.PostCreateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_create_without_author_input_1.PostCreateWithoutAuthorInput)
], PostCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
PostCreateOrConnectWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostCreateOrConnectWithoutAuthorInput);
exports.PostCreateOrConnectWithoutAuthorInput = PostCreateOrConnectWithoutAuthorInput;

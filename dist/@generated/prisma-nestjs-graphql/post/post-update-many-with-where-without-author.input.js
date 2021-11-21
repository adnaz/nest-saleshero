"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_scalar_where_input_1 = require("./post-scalar-where.input");
const post_update_many_mutation_input_1 = require("./post-update-many-mutation.input");
let PostUpdateManyWithWhereWithoutAuthorInput = class PostUpdateManyWithWhereWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_scalar_where_input_1.PostScalarWhereInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_scalar_where_input_1.PostScalarWhereInput)
], PostUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_many_mutation_input_1.PostUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_update_many_mutation_input_1.PostUpdateManyMutationInput)
], PostUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
PostUpdateManyWithWhereWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostUpdateManyWithWhereWithoutAuthorInput);
exports.PostUpdateManyWithWhereWithoutAuthorInput = PostUpdateManyWithWhereWithoutAuthorInput;

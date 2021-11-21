"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_scalar_where_input_1 = require("./reply-scalar-where.input");
const reply_update_many_mutation_input_1 = require("./reply-update-many-mutation.input");
let ReplyUpdateManyWithWhereWithoutUserInput = class ReplyUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_scalar_where_input_1.ReplyScalarWhereInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_scalar_where_input_1.ReplyScalarWhereInput)
], ReplyUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_many_mutation_input_1.ReplyUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_many_mutation_input_1.ReplyUpdateManyMutationInput)
], ReplyUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ReplyUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateManyWithWhereWithoutUserInput);
exports.ReplyUpdateManyWithWhereWithoutUserInput = ReplyUpdateManyWithWhereWithoutUserInput;

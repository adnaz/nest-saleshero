"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithWhereUniqueWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_section_input_1 = require("./reply-update-without-section.input");
let ReplyUpdateWithWhereUniqueWithoutSectionInput = class ReplyUpdateWithWhereUniqueWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUpdateWithWhereUniqueWithoutSectionInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_section_input_1.ReplyUpdateWithoutSectionInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_section_input_1.ReplyUpdateWithoutSectionInput)
], ReplyUpdateWithWhereUniqueWithoutSectionInput.prototype, "data", void 0);
ReplyUpdateWithWhereUniqueWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateWithWhereUniqueWithoutSectionInput);
exports.ReplyUpdateWithWhereUniqueWithoutSectionInput = ReplyUpdateWithWhereUniqueWithoutSectionInput;

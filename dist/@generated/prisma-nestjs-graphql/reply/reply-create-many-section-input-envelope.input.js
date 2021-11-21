"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateManySectionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_many_section_input_1 = require("./reply-create-many-section.input");
let ReplyCreateManySectionInputEnvelope = class ReplyCreateManySectionInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_many_section_input_1.ReplyCreateManySectionInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyCreateManySectionInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyCreateManySectionInputEnvelope.prototype, "skipDuplicates", void 0);
ReplyCreateManySectionInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateManySectionInputEnvelope);
exports.ReplyCreateManySectionInputEnvelope = ReplyCreateManySectionInputEnvelope;

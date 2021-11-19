"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReply = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const reply_model_1 = require("../reply/reply.model");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const quick_reply_value_model_1 = require("../quick-reply-value/quick-reply-value.model");
const quick_reply_count_output_1 = require("./quick-reply-count.output");
let QuickReply = class QuickReply {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], QuickReply.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_model_1.Reply, { nullable: true }),
    __metadata("design:type", reply_model_1.Reply)
], QuickReply.prototype, "reply", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: true }),
    __metadata("design:type", Boolean)
], QuickReply.prototype, "keepIt", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: false }),
    __metadata("design:type", Object)
], QuickReply.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_model_1.QuickReplyValue], { nullable: true }),
    __metadata("design:type", Array)
], QuickReply.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_count_output_1.QuickReplyCount, { nullable: false }),
    __metadata("design:type", quick_reply_count_output_1.QuickReplyCount)
], QuickReply.prototype, "_count", void 0);
QuickReply = __decorate([
    (0, graphql_2.ObjectType)()
], QuickReply);
exports.QuickReply = QuickReply;
//# sourceMappingURL=quick-reply.model.js.map
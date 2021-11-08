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
exports.UpdateOneMessageArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_update_input_1 = require("./message-update.input");
const message_where_unique_input_1 = require("./message-where-unique.input");
let UpdateOneMessageArgs = class UpdateOneMessageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => message_update_input_1.MessageUpdateInput, { nullable: false }),
    __metadata("design:type", message_update_input_1.MessageUpdateInput)
], UpdateOneMessageArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_where_unique_input_1.MessageWhereUniqueInput, { nullable: false }),
    __metadata("design:type", message_where_unique_input_1.MessageWhereUniqueInput)
], UpdateOneMessageArgs.prototype, "where", void 0);
UpdateOneMessageArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneMessageArgs);
exports.UpdateOneMessageArgs = UpdateOneMessageArgs;
//# sourceMappingURL=update-one-message.args.js.map
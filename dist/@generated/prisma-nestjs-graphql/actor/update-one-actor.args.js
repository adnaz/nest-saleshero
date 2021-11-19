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
exports.UpdateOneActorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_update_input_1 = require("./actor-update.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
let UpdateOneActorArgs = class UpdateOneActorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => actor_update_input_1.ActorUpdateInput, { nullable: false }),
    __metadata("design:type", actor_update_input_1.ActorUpdateInput)
], UpdateOneActorArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: false }),
    __metadata("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], UpdateOneActorArgs.prototype, "where", void 0);
UpdateOneActorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneActorArgs);
exports.UpdateOneActorArgs = UpdateOneActorArgs;
//# sourceMappingURL=update-one-actor.args.js.map
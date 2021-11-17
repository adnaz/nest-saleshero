"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsService = void 0;
const common_1 = require("@nestjs/common");
let ActorsService = class ActorsService {
    create(createActorInput) {
        return 'This action adds a new actor';
    }
    findAll() {
        return `This action returns all actors`;
    }
    findOne(id) {
        return `This action returns a #${id} actor`;
    }
    update(id, updateActorInput) {
        return `This action updates a #${id} actor`;
    }
    remove(id) {
        return `This action removes a #${id} actor`;
    }
};
ActorsService = __decorate([
    (0, common_1.Injectable)()
], ActorsService);
exports.ActorsService = ActorsService;
//# sourceMappingURL=actors.service.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sections_service_1 = require("./sections.service");
const section_entity_1 = require("./entities/section.entity");
const create_section_input_1 = require("./dto/create-section.input");
const update_section_input_1 = require("./dto/update-section.input");
let SectionsResolver = class SectionsResolver {
    constructor(sectionsService) {
        this.sectionsService = sectionsService;
    }
    createSection(createSectionInput) {
        return this.sectionsService.create(createSectionInput);
    }
    findAll() {
        return this.sectionsService.findAll();
    }
    findOne(id) {
        return this.sectionsService.findOne(id);
    }
    updateSection(updateSectionInput) {
        return this.sectionsService.update(updateSectionInput.id, updateSectionInput);
    }
    removeSection(id) {
        return this.sectionsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => section_entity_1.Section),
    __param(0, (0, graphql_1.Args)('createSectionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_section_input_1.CreateSectionInput]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "createSection", null);
__decorate([
    (0, graphql_1.Query)(() => [section_entity_1.Section], { name: 'sections' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => section_entity_1.Section, { name: 'section' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => section_entity_1.Section),
    __param(0, (0, graphql_1.Args)('updateSectionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_section_input_1.UpdateSectionInput]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "updateSection", null);
__decorate([
    (0, graphql_1.Mutation)(() => section_entity_1.Section),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SectionsResolver.prototype, "removeSection", null);
SectionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => section_entity_1.Section),
    __metadata("design:paramtypes", [sections_service_1.SectionsService])
], SectionsResolver);
exports.SectionsResolver = SectionsResolver;
//# sourceMappingURL=sections.resolver.js.map
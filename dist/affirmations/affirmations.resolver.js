"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationsResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const affirmation_create_input_1 = require("../@generated/prisma-nestjs-graphql/affirmation/affirmation-create.input");
const affirmation_model_1 = require("../@generated/prisma-nestjs-graphql/affirmation/affirmation.model");
const find_many_affirmation_args_1 = require("../@generated/prisma-nestjs-graphql/affirmation/find-many-affirmation.args");
const update_one_affirmation_args_1 = require("../@generated/prisma-nestjs-graphql/affirmation/update-one-affirmation.args");
const files_service_1 = require("../files/files.service");
const affirmations_service_1 = require("./affirmations.service");
let AffirmationsResolver = class AffirmationsResolver {
    constructor(affirmationsService, filesService) {
        this.affirmationsService = affirmationsService;
        this.filesService = filesService;
    }
    affirmations(findManyAffirmationArgs) {
        return this.affirmationsService.affirmations(findManyAffirmationArgs);
    }
    async affirmation(id) {
        return this.affirmationsService.affirmation({ id });
    }
    createAffirmation(affirmationCreateInput) {
        return this.affirmationsService.createAffirmation(affirmationCreateInput);
    }
    updateAffirmation(updateOneAffirmationArgs) {
        return this.affirmationsService.updateAffirmation(updateOneAffirmationArgs);
    }
    removeAffirmation(id) {
        return this.affirmationsService.deleteAffirmation({ id });
    }
    async image(affirmation) {
        const { imageId } = affirmation;
        if (imageId) {
            return this.filesService.file({ id: imageId });
        }
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [affirmation_model_1.Affirmation]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_affirmation_args_1.FindManyAffirmationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AffirmationsResolver.prototype, "affirmations", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => affirmation_model_1.Affirmation),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AffirmationsResolver.prototype, "affirmation", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => affirmation_model_1.Affirmation),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('affirmationCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [affirmation_create_input_1.AffirmationCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AffirmationsResolver.prototype, "createAffirmation", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => affirmation_model_1.Affirmation),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_affirmation_args_1.UpdateOneAffirmationArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AffirmationsResolver.prototype, "updateAffirmation", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => affirmation_model_1.Affirmation),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AffirmationsResolver.prototype, "removeAffirmation", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [affirmation_model_1.Affirmation]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AffirmationsResolver.prototype, "image", null);
AffirmationsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(affirmation_model_1.Affirmation),
    (0, tslib_1.__metadata)("design:paramtypes", [affirmations_service_1.AffirmationsService, files_service_1.FilesService])
], AffirmationsResolver);
exports.AffirmationsResolver = AffirmationsResolver;

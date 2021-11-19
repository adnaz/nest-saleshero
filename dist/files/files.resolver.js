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
exports.FilesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const file_create_input_1 = require("../@generated/prisma-nestjs-graphql/file/file-create.input");
const file_model_1 = require("../@generated/prisma-nestjs-graphql/file/file.model");
const find_many_file_args_1 = require("../@generated/prisma-nestjs-graphql/file/find-many-file.args");
const update_one_file_args_1 = require("../@generated/prisma-nestjs-graphql/file/update-one-file.args");
const users_service_1 = require("../users/users.service");
const files_service_1 = require("./files.service");
const courses_service_1 = require("../courses/courses.service");
let FilesResolver = class FilesResolver {
    constructor(filesService) {
        this.filesService = filesService;
    }
    files(findManyFileArgs) {
        return this.filesService.files(findManyFileArgs);
    }
    async file(id) {
        return this.filesService.file({ id });
    }
    createFile(fileCreateInput) {
        return this.filesService.createFile(fileCreateInput);
    }
    updateFile(updateOneFileArgs) {
        return this.filesService.updateFile(updateOneFileArgs);
    }
    removeFile(id) {
        return this.filesService.deleteFile({ id });
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [file_model_1.File]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_file_args_1.FindManyFileArgs]),
    __metadata("design:returntype", Promise)
], FilesResolver.prototype, "files", null);
__decorate([
    (0, graphql_1.Query)(retuns => file_model_1.File),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FilesResolver.prototype, "file", null);
__decorate([
    (0, graphql_1.Mutation)(returns => file_model_1.File),
    __param(0, (0, graphql_1.Args)('fileCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [file_create_input_1.FileCreateInput]),
    __metadata("design:returntype", void 0)
], FilesResolver.prototype, "createFile", null);
__decorate([
    (0, graphql_1.Mutation)(() => file_model_1.File),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_file_args_1.UpdateOneFileArgs]),
    __metadata("design:returntype", void 0)
], FilesResolver.prototype, "updateFile", null);
__decorate([
    (0, graphql_1.Mutation)(() => file_model_1.File),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FilesResolver.prototype, "removeFile", null);
FilesResolver = __decorate([
    (0, graphql_1.Resolver)(file_model_1.File),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesResolver);
exports.FilesResolver = FilesResolver;
//# sourceMappingURL=files.resolver.js.map
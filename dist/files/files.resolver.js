"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesResolver = void 0;
const tslib_1 = require("tslib");
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
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [file_model_1.File]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_file_args_1.FindManyFileArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FilesResolver.prototype, "files", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => file_model_1.File),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FilesResolver.prototype, "file", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => file_model_1.File),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('fileCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [file_create_input_1.FileCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FilesResolver.prototype, "createFile", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => file_model_1.File),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_file_args_1.UpdateOneFileArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FilesResolver.prototype, "updateFile", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => file_model_1.File),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FilesResolver.prototype, "removeFile", null);
FilesResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(file_model_1.File),
    (0, tslib_1.__metadata)("design:paramtypes", [files_service_1.FilesService])
], FilesResolver);
exports.FilesResolver = FilesResolver;

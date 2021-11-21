import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { FileCreateInput } from 'src/@generated/prisma-nestjs-graphql/file/file-create.input';
import { File } from 'src/@generated/prisma-nestjs-graphql/file/file.model';
import { FindManyFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/find-many-file.args';
import { UpdateOneFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/update-one-file.args';
import { UsersService } from 'src/users/users.service';
import { FilesService } from './files.service';
import { CoursesService } from 'src/courses/courses.service';
import { Prisma } from '@prisma/client';
@Resolver( File)
export class FilesResolver {

    constructor(private filesService: FilesService) { }


    @Query(returns => [File])
    files(@Args() findManyFileArgs : FindManyFileArgs): Promise<File[]> {
        return this.filesService.files(findManyFileArgs);
    }

    @Query(retuns => File)
    async file(@Args('id', { type: () => Int }) id: number) {
        return this.filesService.file({ id })
    }

    @Mutation(returns =>File)
    createFile(@Args('fileCreateInput') fileCreateInput: FileCreateInput ){
        return this.filesService.createFile(fileCreateInput)
    }
    
    @Mutation(()=>File)
    updateFile(@Args() updateOneFileArgs: UpdateOneFileArgs){
        return this.filesService.updateFile(updateOneFileArgs)
    }

    @Mutation(()=>File)
    removeFile(@Args('id', { type: () => Int }) id: number){
        return this.filesService.deleteFile({id});
    }

    

}

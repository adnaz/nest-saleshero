import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AffirmationCreateInput } from 'src/@generated/prisma-nestjs-graphql/affirmation/affirmation-create.input';
import { Affirmation } from 'src/@generated/prisma-nestjs-graphql/affirmation/affirmation.model';
import { FindManyAffirmationArgs } from 'src/@generated/prisma-nestjs-graphql/affirmation/find-many-affirmation.args';
import { UpdateOneAffirmationArgs } from 'src/@generated/prisma-nestjs-graphql/affirmation/update-one-affirmation.args';
import { FilesService } from 'src/files/files.service';
import { AffirmationsService } from './affirmations.service';
@Resolver(Affirmation)
export class AffirmationsResolver {

    constructor(private affirmationsService: AffirmationsService, private filesService: FilesService) { }


    @Query(returns => [Affirmation])
    affirmations(@Args() findManyAffirmationArgs : FindManyAffirmationArgs): Promise<Affirmation[]> {
        return this.affirmationsService.affirmations(findManyAffirmationArgs);
    }

    @Query(retuns => Affirmation)
    async affirmation(@Args('id', { type: () => Int }) id: number) {
        return this.affirmationsService.affirmation({ id })
    }

    @Mutation(returns =>Affirmation)
    createAffirmation(@Args('affirmationCreateInput') affirmationCreateInput:AffirmationCreateInput ){
        return this.affirmationsService.createAffirmation(affirmationCreateInput)
    }
    
    @Mutation(()=>Affirmation)
    updateAffirmation(@Args() updateOneAffirmationArgs: UpdateOneAffirmationArgs ){
        return this.affirmationsService.updateAffirmation(updateOneAffirmationArgs)
    }

    @Mutation(()=>Affirmation)
    removeAffirmation(@Args('id', { type: () => Int }) id: number){
        return this.affirmationsService.deleteAffirmation({id});
    }

    @ResolveField()
    async image(@Parent() affirmation: Affirmation) {
        const { imageId } = affirmation;
        if(imageId){
            return this.filesService.file({ id:imageId });

        }
    }
}

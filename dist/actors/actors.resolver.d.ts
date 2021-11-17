import { ActorsService } from './actors.service';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';
export declare class ActorsResolver {
    private readonly actorsService;
    constructor(actorsService: ActorsService);
    createActor(createActorInput: CreateActorInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateActor(updateActorInput: UpdateActorInput): string;
    removeActor(id: number): string;
}

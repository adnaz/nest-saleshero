import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';
export declare class ActorsService {
    create(createActorInput: CreateActorInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateActorInput: UpdateActorInput): string;
    remove(id: number): string;
}

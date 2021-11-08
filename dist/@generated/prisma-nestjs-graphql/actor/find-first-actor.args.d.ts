import { ActorWhereInput } from './actor-where.input';
import { ActorOrderByWithRelationInput } from './actor-order-by-with-relation.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorScalarFieldEnum } from './actor-scalar-field.enum';
export declare class FindFirstActorArgs {
    where?: ActorWhereInput;
    orderBy?: Array<ActorOrderByWithRelationInput>;
    cursor?: ActorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ActorScalarFieldEnum>;
}

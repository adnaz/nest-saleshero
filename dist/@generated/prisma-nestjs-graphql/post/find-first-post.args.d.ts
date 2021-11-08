import { PostWhereInput } from './post-where.input';
import { PostOrderByWithRelationInput } from './post-order-by-with-relation.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostScalarFieldEnum } from './post-scalar-field.enum';
export declare class FindFirstPostArgs {
    where?: PostWhereInput;
    orderBy?: Array<PostOrderByWithRelationInput>;
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

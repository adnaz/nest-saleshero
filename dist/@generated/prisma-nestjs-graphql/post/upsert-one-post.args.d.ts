import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateInput } from './post-create.input';
import { PostUpdateInput } from './post-update.input';
export declare class UpsertOnePostArgs {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
}

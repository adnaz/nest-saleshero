import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostsResolver {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(createPostInput: CreatePostInput): string;
    findAll(): string;
    findOne(id: number): string;
    updatePost(updatePostInput: UpdatePostInput): string;
    removePost(id: number): string;
}

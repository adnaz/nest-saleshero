import { User } from './user.entity';
export declare class Post {
    id: number;
    title: string;
    content: string | null;
    published: boolean | null;
    author?: User | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
}

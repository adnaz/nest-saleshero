import { File } from '../file/file.model';
import { Reply } from '../reply/reply.model';
import { ActorCount } from './actor-count.output';
export declare class Actor {
    id: number;
    name: string | null;
    avatar?: File | null;
    fileId: number | null;
    replies?: Array<Reply>;
    createdAt: Date;
    updatedAt: Date;
    _count?: ActorCount;
}

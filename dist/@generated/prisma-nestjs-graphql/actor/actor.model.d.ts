import { Reply } from '../reply/reply.model';
import { ActorCount } from './actor-count.output';
export declare class Actor {
    id: number;
    name: string | null;
    avatar: string | null;
    replies?: Array<Reply>;
    createdAt: Date;
    updatedAt: Date;
    _count?: ActorCount | null;
}

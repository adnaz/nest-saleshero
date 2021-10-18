import { Actor } from '../actor/actor.model';
export declare class Reply {
    id: number;
    text: string | null;
    audio: string | null;
    createdAt: Date;
    updatedAt: Date;
    user?: Actor | null;
    userId: number | null;
}

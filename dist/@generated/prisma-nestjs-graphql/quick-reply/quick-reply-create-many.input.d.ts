import { TypeReply } from '../prisma/type-reply.enum';
export declare class QuickReplyCreateManyInput {
    id?: number;
    keepIt?: boolean;
    type: keyof typeof TypeReply;
}

import { TypeReply } from '../prisma/type-reply.enum';
export declare class QuickReplyCreateManyInput {
    id?: number;
    type: keyof typeof TypeReply;
}

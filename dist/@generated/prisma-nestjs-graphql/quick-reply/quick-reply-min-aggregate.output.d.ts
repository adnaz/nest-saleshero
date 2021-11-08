import { TypeReply } from '../prisma/type-reply.enum';
export declare class QuickReplyMinAggregate {
    id?: number;
    type?: keyof typeof TypeReply;
}

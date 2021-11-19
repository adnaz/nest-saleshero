import { TypeReply } from '../prisma/type-reply.enum';
export declare class QuickReplyMinAggregate {
    id?: number;
    keepIt?: boolean;
    type?: keyof typeof TypeReply;
}

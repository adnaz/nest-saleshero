import { TypeReply } from '../prisma/type-reply.enum';
export declare class QuickReplyMaxAggregate {
    id?: number;
    keepIt?: boolean;
    type?: keyof typeof TypeReply;
}

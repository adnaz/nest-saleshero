import { QuickReply } from '../quick-reply/quick-reply.model';
export declare class QuickReplyValue {
    id: number;
    title: string;
    value: string;
    quickReply?: QuickReply | null;
    quickReplyId: number | null;
}

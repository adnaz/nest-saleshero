import { SectionCreateWithoutRepliesInput } from './section-create-without-replies.input';
import { SectionCreateOrConnectWithoutRepliesInput } from './section-create-or-connect-without-replies.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
export declare class SectionCreateNestedOneWithoutRepliesInput {
    create?: SectionCreateWithoutRepliesInput;
    connectOrCreate?: SectionCreateOrConnectWithoutRepliesInput;
    connect?: SectionWhereUniqueInput;
}

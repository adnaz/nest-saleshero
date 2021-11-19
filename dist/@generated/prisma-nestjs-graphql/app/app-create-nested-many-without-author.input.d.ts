import { AppCreateWithoutAuthorInput } from './app-create-without-author.input';
import { AppCreateOrConnectWithoutAuthorInput } from './app-create-or-connect-without-author.input';
import { AppCreateManyAuthorInputEnvelope } from './app-create-many-author-input-envelope.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
export declare class AppCreateNestedManyWithoutAuthorInput {
    create?: Array<AppCreateWithoutAuthorInput>;
    connectOrCreate?: Array<AppCreateOrConnectWithoutAuthorInput>;
    createMany?: AppCreateManyAuthorInputEnvelope;
    connect?: Array<AppWhereUniqueInput>;
}

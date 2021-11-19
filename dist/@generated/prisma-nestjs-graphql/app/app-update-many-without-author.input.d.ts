import { AppCreateWithoutAuthorInput } from './app-create-without-author.input';
import { AppCreateOrConnectWithoutAuthorInput } from './app-create-or-connect-without-author.input';
import { AppUpsertWithWhereUniqueWithoutAuthorInput } from './app-upsert-with-where-unique-without-author.input';
import { AppCreateManyAuthorInputEnvelope } from './app-create-many-author-input-envelope.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithWhereUniqueWithoutAuthorInput } from './app-update-with-where-unique-without-author.input';
import { AppUpdateManyWithWhereWithoutAuthorInput } from './app-update-many-with-where-without-author.input';
import { AppScalarWhereInput } from './app-scalar-where.input';
export declare class AppUpdateManyWithoutAuthorInput {
    create?: Array<AppCreateWithoutAuthorInput>;
    connectOrCreate?: Array<AppCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<AppUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: AppCreateManyAuthorInputEnvelope;
    set?: Array<AppWhereUniqueInput>;
    disconnect?: Array<AppWhereUniqueInput>;
    delete?: Array<AppWhereUniqueInput>;
    connect?: Array<AppWhereUniqueInput>;
    update?: Array<AppUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<AppUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<AppScalarWhereInput>;
}

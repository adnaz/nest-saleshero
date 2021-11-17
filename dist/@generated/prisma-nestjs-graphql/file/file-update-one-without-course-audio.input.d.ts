import { FileCreateWithoutCourseAudioInput } from './file-create-without-course-audio.input';
import { FileCreateOrConnectWithoutCourseAudioInput } from './file-create-or-connect-without-course-audio.input';
import { FileUpsertWithoutCourseAudioInput } from './file-upsert-without-course-audio.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutCourseAudioInput } from './file-update-without-course-audio.input';
export declare class FileUpdateOneWithoutCourseAudioInput {
    create?: FileCreateWithoutCourseAudioInput;
    connectOrCreate?: FileCreateOrConnectWithoutCourseAudioInput;
    upsert?: FileUpsertWithoutCourseAudioInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: FileWhereUniqueInput;
    update?: FileUpdateWithoutCourseAudioInput;
}

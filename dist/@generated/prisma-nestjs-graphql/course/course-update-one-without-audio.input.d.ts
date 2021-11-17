import { CourseCreateWithoutAudioInput } from './course-create-without-audio.input';
import { CourseCreateOrConnectWithoutAudioInput } from './course-create-or-connect-without-audio.input';
import { CourseUpsertWithoutAudioInput } from './course-upsert-without-audio.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutAudioInput } from './course-update-without-audio.input';
export declare class CourseUpdateOneWithoutAudioInput {
    create?: CourseCreateWithoutAudioInput;
    connectOrCreate?: CourseCreateOrConnectWithoutAudioInput;
    upsert?: CourseUpsertWithoutAudioInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: CourseWhereUniqueInput;
    update?: CourseUpdateWithoutAudioInput;
}

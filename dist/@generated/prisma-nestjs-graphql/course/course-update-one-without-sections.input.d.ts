import { CourseCreateWithoutSectionsInput } from './course-create-without-sections.input';
import { CourseCreateOrConnectWithoutSectionsInput } from './course-create-or-connect-without-sections.input';
import { CourseUpsertWithoutSectionsInput } from './course-upsert-without-sections.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutSectionsInput } from './course-update-without-sections.input';
export declare class CourseUpdateOneWithoutSectionsInput {
    create?: CourseCreateWithoutSectionsInput;
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput;
    upsert?: CourseUpsertWithoutSectionsInput;
    connect?: CourseWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: CourseUpdateWithoutSectionsInput;
}

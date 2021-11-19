import { AppWhereInput } from './app-where.input';
import { AppOrderByWithRelationInput } from './app-order-by-with-relation.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppScalarFieldEnum } from './app-scalar-field.enum';
export declare class FindFirstAppArgs {
    where?: AppWhereInput;
    orderBy?: Array<AppOrderByWithRelationInput>;
    cursor?: AppWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AppScalarFieldEnum>;
}

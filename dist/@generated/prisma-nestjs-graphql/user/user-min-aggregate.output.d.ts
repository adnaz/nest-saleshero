import { Role } from '../prisma/role.enum';
export declare class UserMinAggregate {
    id?: number;
    email?: string;
    username?: string;
    name?: string;
    password?: string;
    role?: keyof typeof Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

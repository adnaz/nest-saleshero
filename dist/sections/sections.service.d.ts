import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
export declare class SectionsService {
    create(createSectionInput: CreateSectionInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSectionInput: UpdateSectionInput): string;
    remove(id: number): string;
}

import { SectionsService } from './sections.service';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
export declare class SectionsResolver {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    createSection(createSectionInput: CreateSectionInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateSection(updateSectionInput: UpdateSectionInput): string;
    removeSection(id: number): string;
}

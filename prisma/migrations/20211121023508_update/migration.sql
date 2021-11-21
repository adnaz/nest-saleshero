-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_sectionId_fkey`;

-- AlterTable
ALTER TABLE `File` MODIFY `type` ENUM('AUDIO', 'IMAGE', 'VIDEO') NULL;

-- AlterTable
ALTER TABLE `QuickReply` MODIFY `type` ENUM('checkbox', 'radio') NULL,
    MODIFY `keepIt` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `QuickReplyValue` MODIFY `title` VARCHAR(191) NULL,
    MODIFY `value` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Reply` MODIFY `sectionId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

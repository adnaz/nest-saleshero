-- CreateTable
CREATE TABLE `Affirmation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` DOUBLE NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `imageId` INTEGER NULL,
    `published` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Affirmation_imageId_key`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Affirmation` ADD CONSTRAINT `Affirmation_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

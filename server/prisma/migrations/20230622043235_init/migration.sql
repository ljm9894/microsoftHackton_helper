/*
  Warnings:

  - You are about to drop the column `serviceSelect` on the `patientapply` table. All the data in the column will be lost.
  - You are about to drop the column `proofInfo` on the `profile` table. All the data in the column will be lost.
  - Added the required column `applyUser` to the `patientapply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inGroup` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `info` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proofName` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `patientapply` DROP COLUMN `serviceSelect`,
    ADD COLUMN `applyUser` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `proofInfo`,
    ADD COLUMN `inGroup` VARCHAR(191) NOT NULL,
    ADD COLUMN `info` VARCHAR(191) NOT NULL,
    ADD COLUMN `proofName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('USER', 'ANGEL') NOT NULL DEFAULT 'USER';

-- AddForeignKey
ALTER TABLE `patientapply` ADD CONSTRAINT `patientapply_applyUser_fkey` FOREIGN KEY (`applyUser`) REFERENCES `user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

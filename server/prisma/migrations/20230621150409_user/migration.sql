-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Address` VARCHAR(191) NOT NULL,
    `birth` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `profileId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `profileImg` VARCHAR(191) NOT NULL,
    `proofImg` VARCHAR(191) NOT NULL,
    `proofInfo` VARCHAR(191) NOT NULL,
    `phoneNum` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`profileId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PatientApply` (
    `applyId` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceSelect` ENUM('HOMEHOSPITALHOME', 'HOMEHOSPITAL', 'HOSPITALHOME', 'HOSPITALONLY') NOT NULL DEFAULT 'HOMEHOSPITALHOME',
    `serviceTime` DATETIME(3) NOT NULL,
    `applyDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `whereInfo` VARCHAR(191) NOT NULL,
    `HowInfo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`applyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Request` (
    `requestId` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('Pending', 'Accepted', 'Declined') NOT NULL DEFAULT 'Pending',
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`requestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Progress` (
    `progressId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `requestId` INTEGER NOT NULL,
    `status` ENUM('Start', 'Hospital', 'Finish') NOT NULL DEFAULT 'Start',
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`progressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `Request`(`requestId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

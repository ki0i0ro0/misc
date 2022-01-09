-- CreateTable
CREATE TABLE "Book" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "isbn" TEXT,
    "lastVolume" INTEGER,
    "publicationDate" TIMESTAMP(3),
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookCategory" (
"id" SERIAL,
    "bookId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
"id" SERIAL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBook" (
"id" SERIAL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "lastVolume" INTEGER NOT NULL,
    "lastRadDate" TIMESTAMP(3) NOT NULL,
    "place" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book.name_unique" ON "Book"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category.name_unique" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

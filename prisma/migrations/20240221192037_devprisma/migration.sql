-- CreateTable
CREATE TABLE "AModelExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "SecondModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aModelExampleId" INTEGER,
    CONSTRAINT "SecondModel_aModelExampleId_fkey" FOREIGN KEY ("aModelExampleId") REFERENCES "AModelExample" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AModelExample_email_key" ON "AModelExample"("email");

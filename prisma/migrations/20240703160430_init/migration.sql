-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tokens" (
    "access_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "sneakersCardData" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "sneakersCardData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_access_token_key" ON "Tokens"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_refresh_token_key" ON "Tokens"("refresh_token");

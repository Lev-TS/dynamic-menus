-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT,
    "titleDict" JSONB NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nestedCategoriesOnMenus" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "nestedCategoryId" TEXT NOT NULL,

    CONSTRAINT "nestedCategoriesOnMenus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NestedCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentId" TEXT,
    "slug" TEXT,
    "titleDict" JSONB NOT NULL,
    "subTitleDict" JSONB,
    "icon" TEXT,

    CONSTRAINT "NestedCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "nestedCategoriesOnMenus" ADD CONSTRAINT "nestedCategoriesOnMenus_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nestedCategoriesOnMenus" ADD CONSTRAINT "nestedCategoriesOnMenus_nestedCategoryId_fkey" FOREIGN KEY ("nestedCategoryId") REFERENCES "NestedCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NestedCategory" ADD CONSTRAINT "NestedCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "NestedCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

import { prisma } from "@/lib/server/db/utils";

const hosts = {
  titleDict: { en: "Your hosts", lt: "შენი მასპინძლები" },
};

const levan = {
  titleDict: { en: "Levan", lt: "ლევანი" },
  subTitleDict: { en: "host", lt: "მასპინძელი" },
  icon: "RxAvatar",
};

const nino = {
  titleDict: { en: "Nino", lt: "ნინო" },
  // subTitleDict: { en: "co-Host", lt: "დამხმარე" },
  icon: "RxAvatar",
};

const access = {
  titleDict: { en: "Access", lt: "წვდომა" },
};

const checkIn = {
  titleDict: { en: "Check in", lt: "შესვლა" },
  subTitleDict: { en: "After 11:00", lt: "11:00-იდან" },
  icon: "ImEnter",
};
const storage = {
  titleDict: { en: "Storage", lt: "სათავსო" },
  subTitleDict: { en: "Everyday 07:00 - 23:00", lt: "ყოველდღე 07:00 - 23:00" },
  icon: "FiBriefcase",
};
const laundry = {
  titleDict: { en: "Laundry", lt: "სამრეცხაო" },
  // subTitleDict: { en: "Everyday 07:00 - 23:00", lt: "ყოველდღე 07:00 - 23:00" },
  icon: "GiWashingMachine",
};

async function seed() {
  const menu = await prisma.menu.upsert({
    where: { slug: "vintage-gallery" },
    update: {},
    create: {
      slug: "vintage-gallery",
      titleDict: {
        en: "Vintage Gallery",
        lt: "ძველი გალერია",
      },
      nestedCategoryRecipes: {
        create: [
          {
            nestedCategory: {
              create: {
                ...hosts,
                icon: null,
                children: {
                  create: [{ ...levan, children: { create: [checkIn, storage, laundry] } }, nino],
                },
              },
            },
          },
          {
            nestedCategory: {
              create: {
                ...access,
                icon: null,
                children: {
                  create: [checkIn, storage, laundry],
                },
              },
            },
          },
        ],
      },
    },
  });

  console.log(menu);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

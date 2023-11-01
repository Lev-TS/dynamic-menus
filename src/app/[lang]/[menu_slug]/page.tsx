import { type Locale } from "@/i18n.config";
import { InfoList } from "@/components/InfoList/component";

export const data = {
  vintage_gallery: {
    infoRecipes: [
      {
        info: {
          id: "0",
          titleDict: { en: "Your Hosts", lt: "შენი მასპინძლები" },
          subTitleDict: null,
          icon: null,
          parentId: null,
          parent: null,
          children: [
            {
              id: "0_0",
              titleDict: { en: "Levan", lt: "ლევანი" },
              subTitleDict: { en: "Host", lt: "მასპინძელი" },
              icon: "RxAvatar",
              parentId: "0",
              children: [],
            },
            {
              id: "0_1",
              titleDict: { en: "Nino", lt: "ნინო" },
              subTitleDict: { en: "co-Host", lt: "დამხმარე" },
              icon: "RxAvatar",
              parentId: "0",
              children: [],
            },
          ],
        },
      },
      {
        info: {
          id: "1",
          titleDict: { en: "Access", lt: "წვდომა" },
          subTitleDict: null,
          icon: null,
          parentId: null,
          parent: null,
          children: [
            {
              id: "1_0",
              titleDict: { en: "Check in", lt: "შესვლა" },
              subTitleDict: { en: "After 11:00", lt: "11:00-იდან" },
              icon: "ImEnter",
              parentId: "1",
              children: [],
            },
            {
              id: "1_1",
              titleDict: { en: "Storage", lt: "სათავსო" },
              subTitleDict: { en: "Everyday 07:00 - 23:00", lt: "ყოველდღე 07:00 - 23:00" },
              icon: "FiBriefcase",
              parentId: "1",
              children: [],
            },
            {
              id: "1_2",
              titleDict: { en: "Laundry", lt: "სამრეცხაო" },
              subTitleDict: { en: "Everyday 07:00 - 23:00", lt: "ყოველდღე 07:00 - 23:00" },
              icon: "GiWashingMachine",
              parentId: "1",
              children: [],
            },
          ],
        },
      },
    ],
  },
};

export default async function MenuPage({ params }: { params: { lang: Locale; menu_slug: string } }) {
  if (!data.hasOwnProperty(params.menu_slug)) {
    return <div>Not Found</div>;
  }

  const uri = [params.lang, params.menu_slug].join("/");

  return (
    <div className="m-auto max-w-sm space-y-6">
      <InfoList uri={uri} infoRecipes={data.vintage_gallery.infoRecipes} lang={params.lang} />
    </div>
  );
}

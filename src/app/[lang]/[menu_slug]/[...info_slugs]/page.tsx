import { Locale } from "@/i18n.config";

export default async function InfoPage({
  params,
}: {
  params: { lang: Locale; menu_slug: string; info_slugs: string[] };
}) {
  const uri = [params.lang, params.menu_slug, ...params.info_slugs].join("/");
  const currentInfoId = params.info_slugs.at(-1);

  return (
    <div className="m-auto max-w-sm space-y-6 px-3 py-6">
      {/* <DynamicInfoList uri={uri} infos={reservation.unit.infoRecipes} /> */}
      {currentInfoId}
    </div>
  );
}

import { useTranslation } from "../i18n";

type paramsProps = {
  params: {
    lng: string;
  };
};

export default async function Home({ params: { lng } }: paramsProps) {
  const { t } = await useTranslation(lng);

  console.log("lng", typeof lng);

  return (
    <div className="text-red-500 flex justify-center items-center text-3xl flex-1">
      {t("resisterToReactApp")}
    </div>
  );
}

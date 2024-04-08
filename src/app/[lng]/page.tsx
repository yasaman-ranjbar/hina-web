import Image from "next/image";
import { useTranslation } from "../i18n";
import Button from "./_components/button/button";
import Loading from "./_components/loading/loading";
import HomeHeroSection from "./_components/home-hero-section/home-hero-section";

type paramsProps = {
  params: {
    lng: string;
  };
};

export default async function Home({ params: { lng } }: paramsProps) {
  const { t } = await useTranslation(lng);

  return <HomeHeroSection />;
}

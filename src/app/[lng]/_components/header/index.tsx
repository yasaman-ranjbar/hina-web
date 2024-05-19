import { LanguageProps } from "@/types/translation";
import Image from "next/image";
import TopNavigation from "./top-navigation";
import ChangeLanguage from "../change-language/change-language";
import HeaderUserSection from "./header-user-section";

const Header = async ({ lng }: LanguageProps) => {

  // when use auth then all routes be dynamically change
  // because we use cookie then all pages be dynamic
  // then do not use auth in layout and 
  // const session = await auth();

  return (
    <header className="border-b border-base-content dark:border-base-content dark:border-opacity-5 py-6">
      {/* container is'nt centered as a default for centered config tailwind.config */}
      <div className="container flex items-center justify-between">
        <Image src="/images/logo2.png" width={50} height={100} alt="hina" />
        <TopNavigation lng={lng} />
        <div className="flex items-center gap-2">
          <HeaderUserSection lng={lng} />
          <ChangeLanguage lng={lng} />
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import { languages } from "@/app/i18n/settings";
import { LanguageProps } from "@/types/translation";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useRef, useState } from "react";

function ChangeLanguage({ lng }: LanguageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent<HTMLElement, MouseEvent>) => {
      if (!ref?.current?.contains(event.target as HTMLInputElement)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside as any);
  }, [ref]);

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          onClick={openHandler}
          type="button"
          className=""
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {lng === "fa" ? (
            <Image
              src="/images/fa.png"
              alt="fa"
              className="rounded-full h-6 w-6"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/images/us.png"
              alt="en"
              className="rounded-full h-6 w-6"
              width={20}
              height={20}
            />
          )}
        </button>
        {isOpen && (
          <div
            ref={ref}
            className={`${lng === "fa" ? "left-0" : "right-0"} absolute w-[6.5rem] bg-base-50 rounded-md shadow-lg  ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            tabIndex={0}
          >
            <div className="py-1" role="none">
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l}>
                      {index > 0 && " or "}
                      <Link href={`/${l}`}>
                        {l === "fa" ? (
                          <div className="flex gap-1 items-center">
                            <Image
                              src="/images/fa.png"
                              alt="en"
                              className="mx-2 h-4 w-6"
                              width={20}
                              height={20}
                            />
                            <span className="grow">Persian</span>
                          </div>
                        ) : (
                          <div className="flex gap-1 items-center">
                            <span className="grow">English</span>
                            <Image
                              src="/images/us.png"
                              alt="en"
                              className="mx-2 h-4 w-6"
                              width={20}
                              height={20}
                            />
                          </div>
                        )}
                      </Link>
                    </span>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChangeLanguage;

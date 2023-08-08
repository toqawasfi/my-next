import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
export default function AboutUs() {
  const t = useTranslations("aboutUs");

  return (
    <>
     

            <h1
              className={`  mb-[20px]  text-[#463BF7] font-medium tracking-wider mt-10 text-[14px] `}>
              {t("Head")}
            </h1>

            <h1 className="title  mb-[10px] "> {t("title")}</h1>
            <p className=" text">{t("descrption")}</p>
        
    </>
  );
}

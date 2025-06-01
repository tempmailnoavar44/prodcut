"use client";

import { footerDataMenu, footerSocialLinks } from "@/src/constants";
import {
  ArrowLeftCommentProduct,
  ArrowLeftShowMoreComments,
  NoavarLogo,
} from "@/src/icons";
import Link from "next/link";
import { useState } from "react";
import GovernmentCredit from "./GovernmentCredit";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="px-4 bg-background-100">
      <div className="bg-background-100 py-7">
        <div className="h-[76px] bg-white rounded-sm flex items-center justify-between my-4 p-4 ">
          <div className="flex gap-3 items-center">
            <NoavarLogo />
            <h4 className="text-sm text-background-200 font-medium justify-self-end">
              دانلود اپلیکیشن نوآور
            </h4>
          </div>
          <ArrowLeftShowMoreComments />
        </div>
        <div className="bg-white">
          {footerDataMenu.map((titles, index) => (
            <div key={index}>
              <div>
                <div
                  className="cursor-pointer py-5 pl-3 pr-5 bg-white rounded-sm flex justify-between items-center font-medium text-background-200 text-xs"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {titles.category}
                  <span
                    className={`transition-transform ml-2 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    <ArrowLeftCommentProduct isBlack />
                  </span>
                </div>
                <div
                  className={`transition-all duration-600 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="bg-white pb-4 list-disc px-10">
                    {titles.subtitles.map(
                      (item: { title: string; link: string }, idx: number) => (
                        <li
                          key={idx}
                          className="py-1 text-background-300 text-xs text-gray-400"
                        >
                          {item.title}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <hr />
            </div>
          ))}

          <div className="py-6 px-5 flex flex-col gap-4">
            <h6 className="font-medium text-xs">{footerSocialLinks.title}</h6>
            <div className="flex items-center justify-center gap-2">
              {footerSocialLinks.socials.map((social, index) => (
                  <div key={index}>
                    <Link href={social.link} key={index}>
                      {social.icon}
                    </Link>
                  </div>
              ))}
            </div>
          </div>
          <hr />
          <GovernmentCredit />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

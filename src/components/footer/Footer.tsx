"use client";

import { footerDataMenu, footerSocialLinks } from "@/src/constants";
import Link from "next/link";
import GovernmentCredit from "./GovernmentCredit";
import { footerButtonDownloadApplications } from "@/src/constants/footerData";

const Footer = () => {
  return (
    <footer className="px-4 pb-3 bg-domaint-500">
      <div className="py-7">
        <div className="flex justify-between flex-wrap gap-y-7">
          <ul className="text-white text-sm font-bold list-none w-1/2 list-inside">
            {footerDataMenu[0].category}
            {footerDataMenu[0].subtitles.map((titles, index) => (
              <li
                className="text-gray-100 text-sm font-normal list-disc pt-4 pr-1 "
                key={index}
              >
                <Link href={"#"}>{titles.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="text-white text-sm font-bold list-none w-1/2 list-inside">
            {footerDataMenu[3].category}
            {footerDataMenu[3].subtitles.map((titles, index) => (
              <li
                className="text-gray-100 text-sm font-normal list-disc pt-4 mr-1"
                key={index}
              >
                <Link href={"#"}>{titles.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="text-white text-sm font-bold list-none w-1/2 list-inside">
            {footerDataMenu[2].category}
            {footerDataMenu[2].subtitles.map((titles, index) => (
              <li
                className="text-gray-100 text-sm font-normal list-disc pt-4 mr-1"
                key={index}
              >
                <Link href={"#"}>{titles.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="text-white text-sm font-bold list-none w-1/2 list-inside">
            {footerDataMenu[1].category}
            {footerDataMenu[1].subtitles.map((titles, index) => (
              <li
                className="text-gray-100 text-sm font-normal list-disc pt-4 mr-1"
                key={index}
              >
                <Link href={"#"}>{titles.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex">
          <div className="w-1/2"></div>
          <div className="flex flex-col gap-2 w-1/2 ">
            <h6 className="text-white text-sm font-bold text-right">
              {footerButtonDownloadApplications.title}
            </h6>
            <div className="flex gap-2 flex-col">
              {footerButtonDownloadApplications.subtitles.map(
                (application, index) => (
                  <Link
                    key={index}
                    href={application.link}
                    className="flex w-[126px] bg-white rounded-md justify-center items-center gap-2 px-4 py-2 text-zinc-800
                  text-xs font-medium"
                  >
                    {application.title} {application.icon}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-6 px-5 flex flex-col gap-4">
        <h6 className=" text-white text-sm font-bold">
          {footerSocialLinks.title}
        </h6>
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
    </footer>
  );
};
export default Footer;

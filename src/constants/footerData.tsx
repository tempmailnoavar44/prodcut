import {
  AparatSocial,
  EtaSocial,
  InstagramSocial,
  LinkedinSocial,
  MobileApplication,
  PcApplication,
  SoroushSocial,
  TelegramSocial,
} from "../icons";
import { FooterDataMenu, FooterSocialLinks } from "../types";
import { FooterButtonsApplication } from "../types/footer";

export const footerDataMenu: FooterDataMenu[] = [
  {
    category: "گروه نوآور",
    subtitles: [
      {
        title: "چاپ کتاب شما",
        link: "https://noavarpub.com/%d9%be%db%8c%d8%b4%d9%86%d9%87%d8%a7%d8%af-%da%86%d8%a7%d9%be-%da%a9%d8%aa%d8%a7%d8%a8/",
      },
      {
        title: "درباره ما",
        link: "https://noavarpub.com/%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d9%85%d8%a7/",
      },
      {
        title: "تماس با ما",
        link: "https://noavarpub.com/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/",
      },
      {
        title: "منابع نظام مهندسی",
        link: "https://noavarpub.com/mn/",
      },
      {
        title: "سوالات متداول",
        link: "",
      },
    ],
  },
  {
    category: "ارتباط با ما",
    subtitles: [
      {
        title: "درباره ما",
        link: "https://noavarpub.com/%d9%be%db%8c%d8%b4%d9%86%d9%87%d8%a7%d8%af-%da%86%d8%a7%d9%be-%da%a9%d8%aa%d8%a7%d8%a8/",
      },
      {
        title: "تماس با ما",
        link: "https://noavarpub.com/%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d9%85%d8%a7/",
      },
    ],
  },
  {
    category: "عمده دسته",
    subtitles: [
      {
        title: "وبلاگ",
        link: "",
      },
      {
        title: "پشتیبانی",
        link: "",
      },
      {
        title: "خبرنامه پیامکی",
        link: "",
      },
      {
        title: "دانلود ها",
        link: "",
      },
    ],
  },
  {
    category: "دسته پیشنهادی",
    subtitles: [
      {
        title: "آزمون نظام مهندسی",
        link: "",
      },
      {
        title: "آزمون کارشناس رسمی",
        link: "",
      },
      {
        title: "ورود به بازار کار",
        link: "",
      },
      {
        title: "نرم افزار و دانشگاهی",
        link: "",
      },
    ],
  },
];

export const footerSocialLinks: FooterSocialLinks = {
  title: "شبکه‌اجتماعی‌",
  socials: [
    {
      icon: <SoroushSocial />,
      link: "",
    },
    {
      icon: <LinkedinSocial />,
      link: "",
    },
    {
      icon: <InstagramSocial />,
      link: "",
    },
    {
      icon: <AparatSocial />,
      link: "",
    },
    {
      icon: <EtaSocial />,
      link: "",
    },
    {
      icon: <TelegramSocial />,
      link: "",
    },
  ],
};

export const footerButtonDownloadApplications: FooterButtonsApplication = {
  title: "دانلود اپلیکیشن",
  subtitles: [
    {
      link: "",
      title: "نسخه موبایل",
      icon: <MobileApplication />,
    },
    {
      link: "",
      title: "نسخه ویندوز",
      icon: <PcApplication />,
    },
  ],
};

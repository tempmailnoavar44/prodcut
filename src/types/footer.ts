export interface FooterDataMenu {
  category: string;
  subtitles: Subtitles[];
}

interface Subtitles {
  title: string;
  link: string;
}

export interface FooterSocialLinks {
  title: string;
  socials: Socials[];
}

interface Socials {
  icon: React.ReactNode;
  link: string;
}

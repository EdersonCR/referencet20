import { SectionData } from '../interfaces/Interfaces';

export type ThemeId = 't20' | 'ghanor';

export interface ThemeColors {
  backround: string;
  title: string;
  subtitle: string;
  subsubtitle: string;
  border: string;
  anotation: string;
  transparent: string;
  modalBackground: string;
  modalBackdroop: string;
  tableBorder: string;
  tableLine: {
    odd: string;
    even: string;
  };
  reference: string;
  link: string;
}

export interface ThemeLink {
  id: number;
  lable: string;
  url: string;
}

export interface ThemeLinks {
  repo: {
    id: number;
    name: string;
  };
  developer: {
    id: number;
    creator: string;
  };
  jambo: ThemeLink;
  t20: ThemeLink;
  mail: ThemeLink;
  referenceDnDPt?: {
    site: ThemeLink;
    creator: ThemeLink;
  };
  icons: ThemeLink & {
    creators: string[];
  };
}

export interface ThemeConfig {
  id: ThemeId;
  siteTitle: string;
  metaDescription: string;
  favicon: string;
  header: {
    title: string;
    description: string;
  };
  colors: ThemeColors;
  links: ThemeLinks;
}

export interface ThemeAssets {
  data: SectionData[];
  background: string;
}

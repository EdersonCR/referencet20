export interface HeaderData {
  title: string;
  description: string;
};

export interface FooterData {
  description: string;
  link: string;
};

export interface SectionData {
  id: number;
  title: string;
  subsections: SubsectionData[];
};

export interface SubsectionData {
  id: number;
  title: string;
  description: string;
  items: ItemData[];
};

export interface ItemData {
  id: number
  title: string;
  description: string;
  img: string;
  details?: DetailData;
  icons: string[];
};

export interface DetailData {
  description: string;
  emphasis?: string;
  uses?: UseData[];
  moreInfo?: string;
  reference: ReferenceData;
};

export interface UseData {
  title?: string;
  description: string;
}

export interface ReferenceData {
  source: string;
  page: string;
};

export interface LinkData {
  id: number;
  lable: string;
  url: string;
}


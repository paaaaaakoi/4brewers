export interface SortData {
    id: number;
    title: string;
    description: string;
    taste: string;
    image: string;
    props: Props;
    tags?: string[];
    bgTheme?: string | string[];
    style?: Style;
};

export type Style = 'sour' | 'hoppy' | 'light' | 'dark' | 'extreme';

export type Props = {
    OG: string,
    ABV: string,
    IBU?: string,
    Ph?: string
}

export interface TeamData {
    image: string;
    name: string;
    position: string;
};

export interface PartnerData {
  image: string;
  name: string;
  position: string;
}

export type City = {
  name: string;
  id: number;
};

export interface Partner {
  adr: string;
  city: string;
  fb: string;
  inst: string;
  lat: number;
  lng: number;
  partner_id: number;
  partner_name: string;
  special_group: number;
  vk: string;
  web: string;
}

interface BaseEntry {
  data?: any;
  status?: number;
  statusText?: string;
  headers?: any;
  config?: any;
}

export interface SortsDTO extends BaseEntry {
  data: SortData[];
}

export interface PartnerDTO extends BaseEntry {
  data: Partner[];
}

export interface CitiesDTO extends BaseEntry {
  data: City[];
}

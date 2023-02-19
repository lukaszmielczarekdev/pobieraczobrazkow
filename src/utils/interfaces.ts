import { MouseEventHandler } from "react";

export interface Image {
  addDate: string;
  downloadDate: string;
  sourceUrl: string;
  file: string;
  _id: any;
}

export interface AllDownloadedImagesProps {
  images: Image[];
  totalPages: number;
  currentPage: number;
}

export interface ImagesContext {
  images: string[];
  imagesInfo: Image[];
  onAddDownloadToQueue?: (url: string) => void;
  onGetImage?: (id: string) => Promise<void>;
  onGetAllDownloadedImages?: (
    page: number
  ) => Promise<AllDownloadedImagesProps | undefined>;
}

export interface PulsatingTextProps {
  text: string;
}

export interface StickerProps {
  id?: string | number;
  fontSize?: string | number;
  text: string;
  rotate: string;
  bgcolor: string;
}

export interface ImageCardProps {
  id: string;
}

export interface SquareIconProps {
  bgcolor: string;
  children: any;
}

export interface FadeInProps {
  duration: number;
  children: any;
}

export interface ImageProps {
  image: Image;
}

export interface DataRowProps {
  href?: string;
  link?: boolean;
  bgcolor: string;
  mt?: string | number;
  text: string;
  children: any;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

export interface ModalProps {
  image: string | undefined;
  isOpen: boolean;
  handleOpen: () => void;
}

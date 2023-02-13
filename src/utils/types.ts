import { MouseEventHandler } from "react";
import { Image } from "./interfaces";

export type PulsatingTextProps = {
  text: string;
};

export type StickerProps = {
  text: string;
  rotate: string;
  bgcolor: string;
};

export type ImageCardProps = {
  id: string;
};

export type SquareIconProps = {
  bgcolor: string;
  children: any;
};

export type FadeInProps = {
  duration: number;
  children: any;
};

export type ImageProps = {
  image: Image;
};

export type DataRowProps = {
  href?: string;
  link?: boolean;
  bgcolor: string;
  mt?: string | number;
  text: string;
  children: any;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

export type ModalProps = {
  image: string | undefined;
  isOpen: boolean;
  handleOpen: () => void;
};

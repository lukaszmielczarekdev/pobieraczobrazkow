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

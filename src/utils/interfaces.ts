export interface Image {
  addDate: string;
  downloadDate: string;
  sourceUrl: string;
  databaseUrl: string;
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
  allDownloadedImages: AllDownloadedImagesProps;
  onAddDownloadToQueue?: (url: string) => void;
  onGetAllDownloadedImages?: (page: number) => Promise<void>;
}

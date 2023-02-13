export interface Image {
  addDate: string;
  downloadDate: string;
  sourceUrl: string;
  databaseUrl: string;
  backupUrl?: string;
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
  onAddDownloadToQueue?: (url: string) => void;
  onGetImage?: (id: string) => Promise<Image | undefined>;
  onGetAllDownloadedImages?: (
    page: number
  ) => Promise<AllDownloadedImagesProps | undefined>;
}

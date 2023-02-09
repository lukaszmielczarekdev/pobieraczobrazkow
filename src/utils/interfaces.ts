export interface Image {
  addDate: string;
  downloadDate: string;
  sourceUrl: string;
  databaseUrl: string;
  file: string;
  _id: any;
}

export interface ImagesContext {
  images: Image[];
  downloadQueue: any;
  onAddDownloadToQueue?: (url: string) => void;
}

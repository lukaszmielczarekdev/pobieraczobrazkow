import { useState, createContext } from "react";
import async from "async";
import ImageService from "../services/imageService";
import {
  Image,
  ImagesContext,
  AllDownloadedImagesProps,
} from "../utils/interfaces";

const INITIAL_STATE: ImagesContext = {
  images: [],
  allDownloadedImages: { images: [], totalPages: 0, currentPage: 1 },
};

const ImageContext = createContext(INITIAL_STATE);

type Task = {
  url: string;
};

export const ImageProvider = ({ children }: React.PropsWithChildren) => {
  const [images, setImages] = useState<Image[]>([]);
  const [allDownloadedImages, setAllDownloadedImages] =
    useState<AllDownloadedImagesProps>({
      images: [],
      totalPages: 0,
      currentPage: 1,
    });

  const handleDownloadImage = async (url: string) => {
    const downloaded = await ImageService.downloadImage(url);
    if (downloaded) {
      setImages((images: Image[]) => [...images, downloaded]);
    }
  };

  const queue = async.queue(async (task: Task) => {
    await handleDownloadImage(task.url);
  }, 1);

  queue.drain(() => {
    console.log("All downloads finished.");
  });

  queue.error((error, task) => {
    console.log(error);
  });

  const handleAddDownloadToQueue = async (url: string) => {
    await queue.push({ url });
  };

  const handleGetAllDownloadedImages = async (page: number) => {
    const allDownloadedImagesUpdated =
      await ImageService.getAllDownloadedImages(page);
    if (allDownloadedImagesUpdated) {
      setAllDownloadedImages({
        ...allDownloadedImagesUpdated,
        images: [
          ...allDownloadedImages.images,
          ...allDownloadedImagesUpdated.images,
        ],
      });
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        allDownloadedImages,
        onAddDownloadToQueue: handleAddDownloadToQueue,
        onGetAllDownloadedImages: handleGetAllDownloadedImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;

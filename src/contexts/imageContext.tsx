import { useState, createContext } from "react";
import async from "async";
import ImageService from "../services/imageService";
import { ImagesContext, AllDownloadedImagesProps } from "../utils/interfaces";

const INITIAL_STATE: ImagesContext = {
  images: localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images") as string)
    : [],
  allDownloadedImages: { images: [], totalPages: 0, currentPage: 1 },
};

const ImageContext = createContext(INITIAL_STATE);

type Task = {
  url: string;
};

export const ImageProvider = ({ children }: React.PropsWithChildren) => {
  const [images, setImages] = useState<string[]>(
    localStorage.getItem("images")
      ? JSON.parse(localStorage.getItem("images") as string)
      : []
  );
  const [allDownloadedImages, setAllDownloadedImages] =
    useState<AllDownloadedImagesProps>({
      images: [],
      totalPages: 0,
      currentPage: 1,
    });

  const handleDownloadImage = async (url: string) => {
    const response = await ImageService.downloadImage(url);
    if (response?.url) {
      localStorage.setItem("images", JSON.stringify([...images, response.url]));
      setImages((images: string[]) => [...images, response.url]);
    }
  };

  const queue = async.queue(async (task: Task, callback) => {
    await handleDownloadImage(task.url);
    callback?.();
  }, 1);

  queue.drain(() => {
    console.log("All downloads finished.");
  });

  queue.error((error, task) => {
    console.log(error);
  });

  const handleAddDownloadToQueue = (url: string) => {
    queue.push({ url });
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

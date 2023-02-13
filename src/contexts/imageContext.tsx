import { useState, createContext } from "react";
import async from "async";
import ImageService from "../services/imageService";
import { ImagesContext } from "../utils/interfaces";

const INITIAL_STATE: ImagesContext = {
  images: localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images") as string)
    : [],
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

  const handleDownloadImage = async (url: string) => {
    const response = await ImageService.downloadImage(url);
    if (response?.url) {
      localStorage.setItem("images", JSON.stringify([...images, response.url]));
      setImages((images: string[]) => [...images, response.url]);
    }
  };

  const handleGetImage = async (id: string) => {
    const response = await ImageService.getImage(id);
    if (response) {
      return response;
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
    const response = await ImageService.getAllDownloadedImages(page);
    if (response) {
      return response;
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        onGetImage: handleGetImage,
        onAddDownloadToQueue: handleAddDownloadToQueue,
        onGetAllDownloadedImages: handleGetAllDownloadedImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;

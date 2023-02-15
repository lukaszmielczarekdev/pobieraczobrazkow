import { useState, createContext } from "react";
import async from "async";
import ImageService from "../services/imageService";
import { Image, ImagesContext } from "../utils/interfaces";

const INITIAL_STATE: ImagesContext = {
  images: localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images") as string)
    : [],
  imagesInfo: localStorage.getItem("imagesInfo")
    ? JSON.parse(localStorage.getItem("imagesInfo") as string)
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
  const [imagesInfo, setImagesInfo] = useState<Image[]>(
    localStorage.getItem("imagesInfo")
      ? JSON.parse(localStorage.getItem("imagesInfo") as string)
      : []
  );

  const handleDownloadImage = async (url: string) => {
    const response = await ImageService.downloadImage(url);
    if (response?.imageId) {
      localStorage.setItem(
        "images",
        JSON.stringify([response.imageId, ...images])
      );
      setImages((images: string[]) => [response.imageId, ...images]);
    }
  };

  const handleGetImage = async (id: string) => {
    const response = await ImageService.getImage(id);
    if (response) {
      response._id = id;
      localStorage.setItem(
        "imagesInfo",
        JSON.stringify([...imagesInfo, response])
      );
      setImagesInfo((imagesInfo: Image[]) => [...imagesInfo, response]);
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
        imagesInfo,
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

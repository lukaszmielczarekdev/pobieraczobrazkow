import { useState, createContext } from "react";
import async from "async";
import ImageService from "../services/imageService";
import { Image, ImagesContext } from "../utils/interfaces";

const INITIAL_STATE: ImagesContext = {
  images: localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images") as string)
    : [],
  downloadQueue: localStorage.getItem("downloadQueue")
    ? JSON.parse(localStorage.getItem("downloadQueue") as string)
    : [],
};

const ImageContext = createContext(INITIAL_STATE);

type Task = {
  url: string;
};

export const ImageProvider = ({ children }: React.PropsWithChildren) => {
  const [images, setImages] = useState<Image[]>(
    localStorage.getItem("images")
      ? JSON.parse(localStorage.getItem("images") as string)
      : []
  );

  const handleDownloadImage = async (url: string) => {
    const downloaded = await ImageService.downloadImage(url);
    if (downloaded) {
      localStorage.setItem("images", JSON.stringify([...images, downloaded]));
      setImages((images: Image[]) => [...images, downloaded]);
    }
  };

  const queue = async.queue(async (task: Task) => {
    await handleDownloadImage(task.url);
    localStorage.setItem("downloadQueue", JSON.stringify(queue));
  }, 1);

  queue.drain(() => {
    console.log("All downloads finished.");
  });

  queue.error((error, task) => {
    console.log(error);
  });

  const handleAddDownloadToQueue = (url: string) => {
    queue.push({ url });
    localStorage.setItem("downloadQueue", JSON.stringify(queue));
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        downloadQueue: queue,
        onAddDownloadToQueue: handleAddDownloadToQueue,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;

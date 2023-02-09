import { useContext } from "react";
import ImageContext from "../contexts/imageContext";

const DownloadQueue = () => {
  const { downloadQueue } = useContext(ImageContext);

  console.log("queue");
  console.log(downloadQueue);

  return (
    <ul style={{ listStyle: "none" }}>
      <li>example download request 1</li>
      <li>example download request 2</li>
      <li>example download request 3</li>
    </ul>
  );
};

export default DownloadQueue;

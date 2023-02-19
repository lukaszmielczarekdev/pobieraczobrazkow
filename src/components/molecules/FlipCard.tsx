import { memo, useState } from "react";
import { CardContent, ImageListItem, ImageListItemBar } from "@mui/material";
import { ImageProps } from "../../utils/interfaces";
import DataRow from "./DataRow";
import AddIcon from "@mui/icons-material/Add";
import StorageIcon from "@mui/icons-material/Storage";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import DownloadIcon from "@mui/icons-material/Download";
import ImageModal from "./ImageModal";
import download from "downloadjs";

const FlipCard = ({ image }: ImageProps) => {
  const [flip, setFlip] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <>
      {flip ? (
        <ImageListItem
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            aspectRatio: "4/3",
            background: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ display: "block", flexWrap: "wrap" }}>
            <DataRow
              bgcolor={"rgb(196 181 253)"}
              text={new Date(image?.addDate).toLocaleString("en-GB", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            >
              <AddIcon
                sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
              />
            </DataRow>
            <DataRow
              bgcolor={"rgb(249 168 212)"}
              text={new Date(image?.downloadDate).toLocaleString("en-GB", {
                dateStyle: "short",
                timeStyle: "short",
              })}
              mt={1}
            >
              <FileDownloadDoneIcon
                sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
              />
            </DataRow>
            <DataRow
              bgcolor={"rgb(134 239 172)"}
              text={"Source"}
              mt={1}
              link
              href={image?.sourceUrl}
            >
              <CropOriginalIcon
                sx={{
                  color: "white",
                  stroke: "#ffffff",
                  strokeWidth: 1,
                  fontSize: "1.2rem",
                }}
              />
            </DataRow>
            <DataRow
              bgcolor={"rgb(196 181 253)"}
              text={"Backup"}
              mt={1}
              onClick={handleOpen}
            >
              <StorageIcon
                sx={{
                  color: "white",
                  stroke: "#ffffff",
                  strokeWidth: 1,
                  fontSize: "1rem",
                }}
              />
            </DataRow>
          </CardContent>
          <DownloadIcon
            onClick={() => download(image?.file, image._id)}
            sx={{
              position: "absolute",
              bottom: "18px",
              right: "18px",
              cursor: "pointer",
              opacity: 0.7,
              background: "white",
              borderRadius: "50%",
            }}
          />
          <ThreeSixtyIcon
            onClick={handleClick}
            sx={{
              position: "absolute",
              bottom: "18px",
              left: "17px",
              cursor: "pointer",
              opacity: 0.7,
              background: "white",
              borderRadius: "50%",
            }}
          />
        </ImageListItem>
      ) : (
        <ImageListItem
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            aspectRatio: "4/3",
          }}
          onClick={handleClick}
        >
          <img
            style={{ borderRadius: "10px", aspectRatio: "4/3" }}
            src={image.file}
            srcSet={image.file}
            alt={"Downloaded"}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{ borderRadius: "10px", width: "fit-content" }}
            title={<ThreeSixtyIcon />}
          />
        </ImageListItem>
      )}
      <ImageModal image={image?.file} isOpen={open} handleOpen={handleOpen} />
    </>
  );
};

export default memo(FlipCard);

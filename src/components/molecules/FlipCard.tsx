import { useState } from "react";
import { CardContent, ImageListItem, ImageListItemBar } from "@mui/material";
import { ImageProps } from "../../utils/types";
import DataRow from "./DataRow";
import AddIcon from "@mui/icons-material/Add";
import StorageIcon from "@mui/icons-material/Storage";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

const FlipCard = ({ image }: ImageProps) => {
  const [flip, setFlip] = useState<boolean>(false);

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
          onClick={handleClick}
        >
          <CardContent sx={{ display: "block", flexWrap: "wrap" }}>
            <DataRow bgcolor={"rgb(196 181 253)"} text={image?.addDate}>
              <AddIcon
                sx={{ color: "white", stroke: "#ffffff", strokeWidth: 1 }}
              />
            </DataRow>
            <DataRow
              bgcolor={"rgb(249 168 212)"}
              text={image?.downloadDate}
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
              link
              href={image.backupUrl ? image.backupUrl : ""}
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
    </>
  );
};

export default FlipCard;

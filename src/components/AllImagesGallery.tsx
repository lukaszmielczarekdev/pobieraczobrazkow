import { useContext, useEffect, useState } from "react";
import ImageContext from "../contexts/imageContext";
import { Image } from "../utils/interfaces";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const AllImagesGallery = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { allDownloadedImages, onGetAllDownloadedImages } =
    useContext(ImageContext);

  const handleLoadMore = () => {
    setPage((page) => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  useEffect(() => {
    if (allDownloadedImages) {
      setPageCount(allDownloadedImages.totalPages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onGetAllDownloadedImages?.(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: "90vh",
        alignSelf: "baseline",
        paddingBottom: "1rem",
      }}
    >
      <ImageList sx={{ width: "100%", height: "100%" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader sx={{ margin: ".2rem" }} component="div">
            Get some inspiration
          </ListSubheader>
        </ImageListItem>
        {allDownloadedImages?.images?.map((image: Image) => (
          <ImageListItem key={image._id}>
            <img
              style={{ borderRadius: "10px" }}
              src={image.file}
              srcSet={image.file}
              alt={"Downloaded"}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{ borderRadius: "10px" }}
              title={`Added: ${image.addDate}`}
              subtitle={`Downloaded: ${image.downloadDate}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button disabled={page === pageCount} onClick={handleLoadMore}>
        Load More...
      </Button>
    </Box>
  );
};

export default AllImagesGallery;

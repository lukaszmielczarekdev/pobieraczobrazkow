import { useContext, useEffect, useState, useRef } from "react";
import { Button, Box, useMediaQuery, useTheme } from "@mui/material";
import ImageContext from "../../contexts/imageContext";
import ImageList from "@mui/material/ImageList";
import CircularProgress from "@mui/material/CircularProgress";
import { AllDownloadedImagesProps, Image } from "../../utils/interfaces";
import Sticker from "../atoms/Sticker";
import FadeIn from "../atoms/FadeIn";
import FlipCard from "../molecules/FlipCard";

const ArchiveImageGallery = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { onGetAllDownloadedImages } = useContext(ImageContext);
  const theme = useTheme();
  const pageCount = useRef(0);
  const page = useRef(1);
  const effectRan = useRef(false);

  const big = useMediaQuery(theme.breakpoints.down("lg"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMediaQuery = () => {
    if (small) return 1;
    if (big) return 2;
    return 3;
  };

  const [allDownloadedImages, setAllDownloadedImages] =
    useState<AllDownloadedImagesProps>({
      images: [],
      totalPages: 0,
      currentPage: 1,
    });

  const handleLoadMore = () => {
    page.current += 1;
    handleDownload();
  };

  const handleDownload = async () => {
    setLoading(true);
    const allDownloadedImagesUpdated = await onGetAllDownloadedImages?.(
      page.current
    );
    if (allDownloadedImagesUpdated) {
      pageCount.current = allDownloadedImagesUpdated.totalPages;
      !pageCount.current &&
        (pageCount.current = allDownloadedImagesUpdated.totalPages);
      setAllDownloadedImages({
        ...allDownloadedImagesUpdated,
        images: [
          ...allDownloadedImages.images,
          ...allDownloadedImagesUpdated.images,
        ],
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (effectRan.current === false) {
      page.current === 1 && handleDownload();

      return () => {
        effectRan.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignSelf: "baseline",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        minHeight: "200px",
      }}
    >
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={handleMediaQuery()}
      >
        {allDownloadedImages?.images.map((image: Image) => (
          <FlipCard image={image} key={image._id} />
        ))}
      </ImageList>
      {loading ? (
        <CircularProgress
          sx={{ alignSelf: "center", justifyself: "center", mt: 1 }}
        />
      ) : (
        <>
          {!allDownloadedImages.images.length ? (
            <FadeIn duration={0.6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sticker
                  text={"Archive is empty."}
                  rotate={"-3deg"}
                  bgcolor={"rgb(255,251,235)"}
                />
              </Box>
            </FadeIn>
          ) : (
            <Button
              sx={{ mt: 1 }}
              disabled={
                !pageCount.current || page.current === pageCount.current
              }
              onClick={() => handleLoadMore()}
            >
              Load More...
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default ArchiveImageGallery;

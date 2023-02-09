import { useContext, useEffect, useState } from "react";
import ImageContext from "../contexts/imageContext";
import { Image } from "../utils/interfaces";

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
    <>
      <span>Page: {page}</span>
      <span>Page count: {pageCount}</span>
      <div style={{ display: "flex" }}>
        {allDownloadedImages?.images?.map(({ _id, file }: Image) => (
          <img key={_id} src={file} alt="Downloaded" width="300" height="300" />
        ))}
        <button disabled={page === pageCount} onClick={handleLoadMore}>
          Load More...
        </button>
      </div>
    </>
  );
};

export default AllImagesGallery;

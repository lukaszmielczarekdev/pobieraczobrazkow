import ArchiveContainer from "../containers/ArchiveContainer";
import ArchiveHeader from "../molecules/ArchiveHeader";
import ArchiveImageGallery from "../organisms/ArchiveImageGallery";

const Archive = () => {
  return (
    <ArchiveContainer>
      <ArchiveHeader />
      <ArchiveImageGallery />
    </ArchiveContainer>
  );
};

export default Archive;

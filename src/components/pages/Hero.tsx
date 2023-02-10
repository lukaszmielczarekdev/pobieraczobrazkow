import HeroContainer from "../containers/HeroContainer";
import HeroHeader from "../molecules/HeroHeader";
import ImageGallery from "../organisms/ImageGallery";
import UrlInput from "../UrlInput";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader />
      <UrlInput />
      <ImageGallery />
    </HeroContainer>
  );
};

export default Hero;

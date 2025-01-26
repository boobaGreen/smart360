import { useState, useEffect, useRef } from "react";
import PrivacyModal from "./components/PrivacyModal";
import TestimonialsSection from "./Testimonial";
import { IUseMediaQueryProps } from "./interfaces/IUseMediaQueryProps";
import Form from "./Form";

import {
  largeImages,
  mediumImages,
  smallImages,
  riga1Images,
  riga2Images,
  riga3Images,
  riga4Images,
} from "./utils/photoList";
import HeaderAndHero from "./HeaderAndHero";
import CentralZPattern from "./CentralZPattern";
import Footer from "./Footer";
import TruckAnimation from "./components/TruckAnimation";

function useMediaQuery(query: IUseMediaQueryProps["query"]): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );

  // Choose images based on screen size
  const images = isSmallScreen
    ? smallImages
    : isMediumScreen
    ? mediumImages
    : largeImages;

  const [currentImage, setCurrentImage] = useState(0);

  // Change image automatically every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex flex-col min-h-screen h-auto bg-bluCesena-500 overflow-x-hidden select-none font-title">
      {/* Privacy Modal */}
      <PrivacyModal isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* Header and hero image */}
      <HeaderAndHero
        scrollToForm={scrollToForm}
        currentImage={currentImage}
        images={images}
        setIsVisible={setIsVisible}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <CentralZPattern
        riga1Images={riga1Images}
        riga2Images={riga2Images}
        riga3Images={riga3Images}
        riga4Images={riga4Images}
        scrollToForm={scrollToForm}
        currentImage={currentImage}
      />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div ref={formRef} id="contacts">
        <Form setIsVisible={setIsVisible} />
      </div>
      <TruckAnimation />
      <Footer />
    </div>
  );
}

export default App;

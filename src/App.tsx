import { useState, useEffect } from "react";
import TestimonialsSection from "./Testimonial";
import { useRef } from "react";
import { IUseMediaQueryProps } from "./interfaces/IUseMediaQueryProps";
import Form from "./FormFooter";

import {
  largeImages,
  mediumImages,
  smallImages,
  riga1Images,
  riga2Images,
  riga3Images,
} from "./utils/photoList";
import HeaderAndHero from "./HeaderAndHero";
import CentralZPattern from "./CentralZPattern";

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

  // Change image automatically every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex flex-col min-h-screen h-auto bg-bluCesena-500 overflow-x-hidden ">
      {/* Header and hero image */}
      <HeaderAndHero
        scrollToForm={scrollToForm}
        currentImage={currentImage}
        images={images}
      />
      {/* New Section for alternating boxes */}
      <CentralZPattern
        riga1Images={riga1Images}
        riga2Images={riga2Images}
        riga3Images={riga3Images}
        scrollToForm={scrollToForm}
        currentImage={currentImage}
      />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div ref={formRef} id="contacts">
        <Form />
      </div>
    </div>
  );
}

export default App;

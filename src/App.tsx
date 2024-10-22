import { useState, useEffect } from "react";
import TestimonialsSection from "./Testimonial";


import Form from "./Form";

import Cta from "./Cta";

// Custom hook to determine screen size
interface UseMediaQueryProps {
  query: string;
}

function useMediaQuery(query: UseMediaQueryProps["query"]): boolean {
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
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );

  // Images for different screen sizes
  const smallImages = [
    "bg-elevator-small",
    "bg-elevator-small",
    "bg-montagna-small",
    "bg-montagna-small",
    "bg-scala-small",
    "bg-scala-small",
    "bg-stretto-small",
    "bg-stretto-small",
  ];
  const mediumImages = [
    "bg-elevator-small",
    "bg-elevator-small",
    "bg-montagna-small",
    "bg-montagna-small",
    "bg-scala-small",
    "bg-scala-small",
    "bg-stretto-small",
    "bg-stretto-small",
  ];
  const largeImages = [
    "bg-elevator-large",
    "bg-elevator-large",
    "bg-scala-giu-large",
    "bg-scala-giu-large",
    "bg-elevator-large",
    "bg-elevator-large",
    "bg-prato-large",
    "bg-prato-large",
  ];
  const riga1Images = [
    "bg-gh-image",
    "bg-terrazzo-cut",
    "bg-quarto-piano",
    "bg-flotta-large",
    "bg-artigianale-large",
    "bg-terrazzo-cut",
    "bg-gh-image",
    "bg-quarto-piano",
  ];
  const riga3Images = [
    "bg-vetro-img",
    "bg-imballa-giu",
    "bg-imballa-1",
    "bg-vetro-img",
    "bg-imballa-giu",
    "bg-imballa-2",
    "bg-vetro-img",
    "bg-imballa-giu",
  ];
  const riga2Images = [
    "bg-apertura-flotta",
    "bg-prato-large",
    "bg-elevator-large",
    "bg-mare-flotta",
    "bg-apertura-flotta",
    "bg-prato-large",
    "bg-elevator-large",
    "bg-mare-flotta",
  ];

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
    <div className="flex flex-col min-h-screen bg-bluCesena-500">
      {/* Header and hero image */}
      <div>
        <div
          className={`${images[currentImage]} bg-cover bg-no-repeat min-h-[80vh]`}
        >
          <div className="uppercase text-red-800 text-lg md:text-2xl lg:text-3xl font-title font-black pl-4 ">
            <div className="leading-none">
              <p className="text-redCesena-400">group</p>
              <span className="text-white">traslochi</span>
            </div>
            <div className="leading-none animate-wiggle w-fit">
              <span className="text-redCesena-400">smart</span>
              <span className="text-white ">360°</span>
            </div>
          </div>
          <div className="pt-40 pl-4 text-5xl md:text-6xl lg:text-7xl">
            <div className="text-white tracking-tighter font-title uppercase font-black  w-fit">
              <p>NOLEGGIO</p>
              <span>ELEVATORE</span>
            </div>
            <div className=" text-redCesena-400 tracking-tighter font-title uppercase font-black bg-bluCesena-500 w-fit p-1 ">
              <p>TRASLOCHI</p>
              <span>DEPOSITO</span>
            </div>
          </div>
        </div>
        {/* White description below */}
        <div className="bg-bluCesena-500 min-h-[20vh] w-full flex-col justify-center items-center">
          <Cta />
          <p className="text-white font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-20">
            NOLEGGIO PIATTAFORME
          </p>
          <p className="text-white font-title tracking-[0.75em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center mt-4 items-center">
            PER MOBILI &
          </p>
          <p className="text-white font-title tracking-[0.55em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center mt-4 items-center">
            ELETTRODOMESTICI
          </p>
          <p className=" my-4 px-16 mt-10 font-title text-base font-medium leading-6 xl:px-80 xl:text-xl pt-20">
            Stai cercando di spostare un divano, un grande frigorifero, un
            mobiletto o un grande letto su per le scale o attraverso quella
            porta stretta? È molto più semplice utilizzare un sollevatore per
            piattaforme per mobili per risparmiare tempo, denaro e fatica.
            <br className="mb-6" /> I nostri montacarichi possono anche ridurre
            al minimo il potenziale rischio di danni ai vostri oggetti e
            proprietà di valore.
          </p>
        </div>

        <div className="h-20 bg-bluCesena-500"> </div>
      </div>

      {/* New Section for alternating boxes */}
      <div className="flex flex-col w-full ">
        {/* Row 1 */}
        <div className="flex flex-col xl:flex-row w-full h-[80vh] xl:h-[60vh]  bg-redCesena-400">
          <div className="bg-redCesena-400 xl:w-1/2 w-full h-full flex-col justify-center items-center">
            <div className="flex justify-center items-center ">
              <p className="text-redCesena-990 font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
                TRASLOCHI
              </p>
            </div>
            <p className="m-4 mb-20  px-16 xl:px-40 font-title text-base font-medium leading-6  xl:text-xl text-white">
              Hai bisogno di una mano per il trasloco nella tua nuova casa dei
              sogni? Imballiamo la tua merce con cura e la trasportiamo in
              ordine e siucerezza nella tua nuova abitazione.
              <br className="mb-6" />
              Hai necessita' di business per portare forniture di mobili o di
              merci in un nuovo ufficio o negozio? Siamo qui per aiutarti.
            </p>
          </div>
          <Cta />

          <div
            className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga1Images[currentImage]}`}
          >
            {/* Immagine 1 */}
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col-reverse xl:flex-row w-full h-[80vh] xl:h-[60vh] ">
          <div
            className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga2Images[currentImage]}`}
          >
            {/* Immagine 2 */}
          </div>
          <div className="bg-bluCesena-500 xl:w-1/2 w-full h-full flex-col justify-center items-center">
            <div className="flex justify-center items-center ">
              <p className="text-white font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
                DEPOSITO
              </p>
            </div>
            <p className="m-4 mb-20  px-16 xl:px-40 font-title text-base font-medium leading-6  xl:text-xl text-redCesena-990">
              Non sai dove stipare i tuoi mobili durante il trasloco o per altri
              motivi? Effettuiamo servizio di deposito mobili a breve e lungo
              termine.
              <br className="mb-6" />
              Problema risolto!
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col xl:flex-row w-full h-[80vh] xl:h-[60vh]  bg-redCesena-400 ">
          <div className="bg-redCesena-400 xl:w-1/2 w-full h-full flex-COL justify-center items-center">
            <div className="flex justify-center items-center flex-col ">
              <p className="text-redCesena-990 font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
                MONTAGGIO
              </p>
              <p className="text-redCesena-990 font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4">
                &
              </p>
              <p className="text-redCesena-990 font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4">
                SMONTAGGIO
              </p>
            </div>
            <p className="m-4 mb-20  px-16 xl:px-40 font-title text-base font-medium leading-6  xl:text-xl text-white">
              Sia che il tuo mobilio vada in deposito o venga subito trasportato
              in molte occasioni e piu' comodo e siucro smontare alcuni tipi di
              mobilio.
              <br className="mb-6" />
              Smontiamo e rimontiamo i tuoi mobili con precisione e cura.
            </p>
          </div>
          <Cta />
          <div
            className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga3Images[currentImage]}`}
          >
            {/* Immagine 3 */}
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <Form />
    </div>
  );
}

export default App;

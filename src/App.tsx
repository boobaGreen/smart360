import { useState, useEffect } from "react";
import Button from "./Button";

// Custom hook per determinare la dimensione dello schermo
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

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
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // schermi piccoli
  const isMediumScreen = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  ); // schermi medi
  const isLargeScreen = useMediaQuery("(min-width: 1025px)"); // schermi grandi

  // Immagini per diverse dimensioni di schermo
  const smallImages = [
    "bg-elevator-small", // immagine per schermi piccoli
    "bg-montagna-small",
    "bg-scala-small",
    "bg-stretto-small",
  ];
  const mediumImages = [
    "bg-elevator-small", // immagine per schermi piccoli
    "bg-montagna-small",
    "bg-stretto-small",
  ];
  const largeImages = [
    "bg-elevator-large", // immagine per schermi grandi
    "bg-scala-giu-large",
    "bg-prato-large",
  ];

  // Scegli le immagini in base alla dimensione dello schermo
  const images = isSmallScreen
    ? smallImages
    : isMediumScreen
    ? mediumImages
    : largeImages;

  const [currentImage, setCurrentImage] = useState(0);

  // Cambia immagine automaticamente ogni 6 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* header e prima descrizione bianca sotto */}
      <div>
        {/* header e immagine hero */}
        <div
          className={`${images[currentImage]} bg-cover bg-no-repeat min-h-[80vh]`}
        >
          <div className="uppercase text-red-800 text-lg md:text-2xl lg:text-3xl font-title font-black pl-4 ">
            <div className="leading-none">
              <p className="text-redCesena-400">group</p>
              <span className="text-white">traslochi</span>
            </div>
            <div className="leading-none">
              <span className="text-redCesena-400">smart</span>
              <span className="text-white">360°</span>
            </div>
          </div>
          <div className="pt-40 pl-4 text-5xl md:text-6xl lg:text-7xl">
            <div className="text-white tracking-tighter font-title uppercase font-black">
              <p>NOLEGGIO</p>
              <span>ELEVATORE</span>
            </div>
            <div className="text-redCesena-400 tracking-tighter font-title uppercase font-black bg-white w-fit p-1 ">
              <p>TRASLOCHI</p>
              <span>DEPOSITO</span>
            </div>
          </div>
        </div>
        {/* descrizione bianca sotto */}
        <div className="bg-white min-h-[20vh] w-full flex-col justify-center items-center">
          <p className="text-redCesena-400 font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-20 md:mt-32 lg:mt-40">
            NOLEGGIO PIATTAFORME
          </p>

          <p className="text-redCesena-400 font-title tracking-[0.75em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center mt-4 items-center">
            PER MOBILI &
          </p>
          <p className="text-redCesena-400 font-title tracking-[0.55em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center mt-4 items-center">
            ELETTRODOMESTICI
          </p>
          <p className="m-4 mt-24 font-title text-base font-medium leading-6">
            Stai cercando di spostare un divano, un grande frigorifero, un
            mobiletto o un grande letto su per le scale o attraverso quella
            porta stretta? È molto più semplice utilizzare un sollevatore per
            piattaforme per mobili per risparmiare tempo, denaro e fatica. I
            nostri montacarichi possono anche ridurre al minimo il potenziale
            rischio di danni ai vostri oggetti e proprietà di valore.
          </p>
        </div>
        <div className="h-20 flex flex-col justify-center items-center mt-16 w-full space-y-4">
          <button className="border-4 border-bluCesena-700 bg-bluCesena-500 text-bluCesena-700 font-title text-xl font-bold py-2 px-4 min-w-80">
            RICHIEDI UN PREVENTIVO
          </button>
          <button className="border-4 border-redCesena-800 bg-redCesena-400 text-white font-title text-xl font-bold py-2 px-4 min-w-80">
            CHIAMA
          </button>
        </div>

        <div className="h-20 bg-white"> </div>
      </div>
    </div>
  );
}

export default App;

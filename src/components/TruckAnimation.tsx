import { useRef, useState } from "react";

const TruckAnimation = () => {
  // Crea un riferimento all'elemento audio
  const hornSound = useRef<HTMLAudioElement>(null);
  // Stato per gestire il testo
  const [displayText, setDisplayText] = useState("Smart360°");
  const [headerText, setHeaderText] = useState("Group Traslochi"); // Nuovo stato per il testo dell'intestazione

  // Funzione per riprodurre il suono del clacson
  const playHornSound = () => {
    if (hornSound.current) {
      hornSound.current.play();
      // Cambia il testo temporaneamente
      setDisplayText("01");
      setHeaderText("Generale Lee"); // Cambia l'intestazione
      // Ripristina il testo dopo 1 secondo
      setTimeout(() => {
        setDisplayText("Smart360°");
        setHeaderText("Group Traslochi"); // Ripristina l'intestazione
      }, 2500); // Cambia il tempo come desiderato
    }
  };

  return (
    <div className="flex justify-center items-center h-56 w-full overflow-hidden ">
      <div className="relative w-full h-40 bg-transparent border-gray-[#6b7280] border-b-0 ">
        {/* Elemento audio nascosto */}
        <audio ref={hornSound} src="/sound/generaleLee.mp3" preload="auto" />
        <div
          className="absolute top-0 left-0 w-[320px] h-[150px] xl:animate-drive animate-driveMobile"
          onClick={playHornSound}
        >
          {/* Cab section */}
          <div className="z-10 absolute top-2 right-0 w-[110px] h-[100px] bg-redVan-400 rounded-t-[10px] animate-jolt border-2 border-[#000000]">
            {/* Window */}
            <div className="absolute top-[12px] right-[10px] w-[60px] h-[35px] bg-bluCesena-200 rounded border-2 border-[#000000]"></div>

            {/* Grill */}
            <div className="absolute top-[60px] right-[80px] w-5 h-[30px] bg-[#646363] rounded z-40 border-2 border-[#000000]"></div>

            {/* Mirror */}
            <div className="absolute top-[35px] right-[-11px] w-[10px] h-[30px] bg-redVan-400 border-2 border-[#000000] "></div>
          </div>

          {/* Box section */}
          <div className="absolute -top-4 right-[110px] w-[190px] h-[130px] bg-[#fffffe] rounded border-2 border-[#000000] z-10">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-redCesena-900 text-lg font-bold">
                {headerText} {/* Usa lo stato per l'intestazione */}
              </span>
              <span className="text-redCesena-900 text-sm font-bold animate-wiggle">
                {displayText} {/* Usa lo stato per il testo */}
              </span>
            </div>
            <div className="absolute top-[22px] right-[10px] w-[170px] h-1 bg-redVan-400"></div>
            <div className="absolute bottom-[22px] right-[10px] w-[170px] h-1 bg-redVan-400"></div>
          </div>

          {/* Wheels */}
          <div className="absolute bottom-0 w-[55px] h-[55px] bg-[#374151] rounded-full shadow-lg right-[15px] animate-jolt ">
            <div className="absolute top-[10px] left-[10px] w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
          </div>

          <div className="absolute bottom-0 w-[55px] h-[55px] bg-[#374151] rounded-full shadow-lg left-[55px] animate-jolt">
            <div className="absolute top-[10px] left-[10px] w-[35px] h-[35px] bg-[#d1d5db] rounded-full"></div>
          </div>

          {/* Shadow */}
          <div className="absolute bottom-[-12px] left-0 w-[320px] h-5 bg-[#000000] opacity-20 rounded-full"></div>

          {/* Nuvolette di fumo */}
          <div className="absolute top-20 left-2 animate-smoke1 z-20">
            <div className="w-5 h-5 bg-[#e4e4e4] rounded-full"></div>
          </div>
          <div className="absolute top-20 left-2 animate-smoke2 z-20">
            <div className="w-6 h-6 bg-[#e4e4e4] rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-20 left-2 animate-smoke3 z-20">
            <div className="w-7 h-7 bg-[#e4e4e4] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckAnimation;

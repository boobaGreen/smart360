import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { tel1, tel1Android } from "../utils/costants";

interface CtaProps {
  scrollToForm: () => void;
}

export default function Cta({ scrollToForm }: CtaProps) {
  const [buttonText, setButtonText] = useState("CHIAMA");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleButtonClick = () => {
    setButtonText(tel1);
    if (isMobile) {
      window.location.href = tel1Android;
    }
  };

  return (
    <div className="h-20 flex flex-col justify-center items-center mt-38 w-full space-y-4 bg-transparent z-10">
      <button
        onClick={scrollToForm}
        className="hover:border-redCesena-200 animate-bounce hover:scale-110 scale-100 hover:animate-none border-4 border-redCesena-800 bg-redCesena-400 text-white font-title text-xl font-bold py-2 px-4 min-w-80 shadow-md shadow-redCesena-990"
      >
        <p className="">RICHIEDI UN PREVENTIVO</p>
      </button>
      <button
        onClick={handleButtonClick}
        className="shadow-bluCesena-700 hover:border-bluCesena-200 shadow-md hover:scale-110 border-4 border-bluCesena-700 bg-bluCesena-500 text-white font-title text-xl font-bold py-2 px-4 min-w-80 flex"
      >
        <p className="flex justify-end  items-center w-1/5 animate-pulse font-title ">
          <IconContext.Provider value={{ color: "white", size: "26" }}>
            <FiPhone />
          </IconContext.Provider>
        </p>
        <p className="flex justify-start px-10  font-title ">{buttonText}</p>
      </button>
    </div>
  );
}

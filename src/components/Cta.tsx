import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Chiama from "./Chiama";
import RichiediPreventivo from "./RichiediPreventivo";
import { tel1, tel1Android } from "../utils/costants";

interface CtaProps {
  scrollToForm: () => void;
}

export default function Cta({ scrollToForm }: CtaProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [buttonText, setButtonText] = useState("CHIAMA");
  const handleButtonClick = () => {
    setButtonText(tel1);
    if (isMobile) {
      window.location.href = tel1Android;
    }
  };

  return (
    <div className="h-20 flex flex-col justify-center items-center mt-38 w-full space-y-4 bg-transparent z-10 xl:hidden">
      <RichiediPreventivo scrollToForm={scrollToForm} />
      <Chiama handleButtonClick={handleButtonClick} buttonText={buttonText} />
    </div>
  );
}

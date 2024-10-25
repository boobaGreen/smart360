import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IChiamaProps } from "../interfaces/IChiama";

export default function Chiama({
  handleButtonClick,
  buttonText,
}: IChiamaProps) {
  return (
    <button
      onClick={handleButtonClick}
      className="shadow-bluCesena-700 hover:border-bluCesena-200 shadow-md hover:scale-110 border-4 border-bluCesena-700 bg-bluCesena-500 text-white font-title text-xl font-bold py-2 px-4 min-w-80 flex"
    >
      <p className="flex justify-end  items-center w-1/5 animate-pulse font-title ">
        <IconContext.Provider value={{ color: "white", size: "26" }}>
          <FiPhone />
        </IconContext.Provider>
      </p>
      <p className="flex justify-start px-10 font-title ">{buttonText}</p>
    </button>
  );
}

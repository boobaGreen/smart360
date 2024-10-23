import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
interface CtaProps {
  scrollToForm: () => void;
}

export default function Cta({ scrollToForm }: CtaProps) {
  return (
    <div className="h-20 flex flex-col justify-center items-center mt-38 w-full space-y-4 bg-transparent z-10">
      <button
        onClick={scrollToForm}
        className="font-title shadow-md shadow-redCesena-990 animate-bounce border-4 border-redCesena-800 bg-redCesena-400 text-white font-title text-xl font-bold py-2 px-4 min-w-80"
      >
        RICHIEDI UN PREVENTIVO
      </button>
      <button className=" shadow-bluCesena-700 shadow-md  border-4 border-bluCesena-700 bg-bluCesena-500 text-white font-title text-xl font-bold py-2 px-4 min-w-80 flex ">
        <p className="flex justify-end  items-center w-1/5 animate-pulse font-title">
          <IconContext.Provider value={{ color: "white", size: "26" }}>
            <FiPhone />
          </IconContext.Provider>
        </p>
        <p className="flex justify-start px-10 animate-pulse">CHIAMA</p>
      </button>
    </div>
  );
}

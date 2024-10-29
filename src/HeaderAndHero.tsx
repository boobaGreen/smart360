import Logo from "./components/Logo";
import { NavDesktop } from "./components/NavDesktop";
import { NavMobile } from "./components/NavMobile";
import Title from "./components/Title";
import CtaPrimo from "./components/CtaPrimo.tsx";
import { IHeaderAndHeroProps } from "./interfaces/IHeaderAndHero.ts";
import TruckAnimation from "./components/TruckAnimation.tsx";

export default function HeaderAndHero({
  scrollToForm,
  currentImage,
  images,
  setIsVisible,
  isOpen,
  setOpen,
}: IHeaderAndHeroProps) {
  return (
    <div id="home">
      <header
        className={`${images[currentImage]} bg-cover bg-no-repeat min-h-[80vh] `}
      >
        <div className="uppercase text-redCesena-800 text-lg md:text-2xl lg:text-3xl font-title font-black pl-4 flex justify-between pr-6 md:hover:bg-bluCesena-500 ">
          <Logo />
          <NavDesktop setIsVisible={setIsVisible} />
          <NavMobile
            setIsVisible={setIsVisible}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        </div>

        {/* Conditionally render Title only if isOpen is false */}
        {!isOpen && <Title />}
      </header>
      {/* White description below */}
      <section className="bg-bluCesena-500 min-h-[20vh] w-full flex-col justify-center items-center">
        <CtaPrimo scrollToForm={scrollToForm} />
        <h2 className="text-white font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-20">
          TRASLOCHI
        </h2>
        <h2 className="text-white font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4 ">
          COMPLETI
        </h2>

        <p className=" my-4 px-16 mt-10 font-title text-base font-medium leading-6 xl:px-80 xl:text-xl pt-20">
          Hai bisogno di una mano per il trasloco nella tua nuova casa dei
          sogni? Imballiamo la tua merce con cura e la trasportiamo in ordine e
          sicurezza nella tua nuova abitazione.
          <br className="mb-6" /> Hai necessita' di business per portare
          forniture di mobili o di merci in un nuovo ufficio o negozio?
          <br className="mb-6" />
          Siamo qui per aiutarti.
        </p>
        <div className="mt-24">
          <TruckAnimation />
        </div>
      </section>

      <div className="h-20 bg-bluCesena-500"> </div>
    </div>
  );
}

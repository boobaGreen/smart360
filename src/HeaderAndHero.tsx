import Logo from "./components/Logo";
import { NavDesktop } from "./components/NavDesktop";
import { NavMobile } from "./components/NavMobile";
import Title from "./components/Title";
import CtaPrimo from "./components/CtaPrimo.tsx";
import { IHeaderAndHeroProps } from "./interfaces/IHeaderAndHero.ts";

export default function HeaderAndHero({
  scrollToForm,
  currentImage,
  images,
}: IHeaderAndHeroProps) {
  return (
    <div id="home">
      <div
        className={`${images[currentImage]} bg-cover bg-no-repeat min-h-[80vh] `}
      >
        <div className="uppercase text-red-800 text-lg md:text-2xl lg:text-3xl font-title font-black pl-4 flex justify-between pr-6 md:hover:bg-bluCesena-500 ">
          <Logo />
          <NavDesktop />
          <NavMobile />
        </div>

        <Title />
      </div>
      {/* White description below */}
      <div className="bg-bluCesena-500 min-h-[20vh] w-full flex-col justify-center items-center">
        <CtaPrimo scrollToForm={scrollToForm} />
        <p className="text-white font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-20">
          NOLEGGIO
        </p>
        <p className="text-white font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4 ">
          PIATTAFORME
        </p>
        <p className="text-white font-title tracking-[0.75em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center mt-4 items-center">
          PER MOBILI &
        </p>
        <p className="text-white font-title tracking-[0.55em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center mt-4 items-center">
          ELETTRODOMESTICI
        </p>
        <p className=" my-4 px-16 mt-10 font-title text-base font-medium leading-6 xl:px-80 xl:text-xl pt-20">
          Stai cercando di spostare un divano, un grande frigorifero, un
          mobiletto o un grande letto su per le scale o attraverso quella porta
          stretta? È molto più semplice utilizzare un sollevatore per
          piattaforme per mobili per risparmiare tempo, denaro e fatica.
          <br className="mb-6" /> I nostri montacarichi possono anche ridurre al
          minimo il potenziale rischio di danni ai vostri oggetti e proprietà di
          valore.
        </p>
      </div>

      <div className="h-20 bg-bluCesena-500"> </div>
    </div>
  );
}

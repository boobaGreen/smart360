import Cta from "./components/Cta";
import { ICentralZPattern } from "./interfaces/ICentralZPattern";
export default function CentralZPattern({
  riga1Images,
  riga2Images,
  riga3Images,
  scrollToForm,
  currentImage,
}: ICentralZPattern) {
  return (
    <div className="flex flex-col w-full ">
      {/* Row 1 */}
      <div className="flex flex-col xl:flex-row w-full h-[120vh] xl:h-[60vh]  bg-redCesena-400">
        <div className="bg-redCesena-400 xl:w-1/2 w-full h-full flex-col justify-center items-center">
          <div className="flex justify-center items-center ">
            <p className="text-redCesena-990 font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
              TRASLOCHI
            </p>
          </div>
          <p className="m-4 mb-20  px-16 xl:px-40 font-title text-base font-medium leading-6  xl:text-xl text-white">
            Hai bisogno di una mano per il trasloco nella tua nuova casa dei
            sogni? Imballiamo la tua merce con cura e la trasportiamo in ordine
            e siucerezza nella tua nuova abitazione.
            <br className="mb-6" />
            Hai necessita' di business per portare forniture di mobili o di
            merci in un nuovo ufficio o negozio? Siamo qui per aiutarti.
          </p>
        </div>
        <Cta scrollToForm={scrollToForm} />

        <div
          className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga1Images[currentImage]}`}
        >
          {/* Immagine 1 */}
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-col-reverse xl:flex-row w-full h-[100vh] xl:h-[60vh]  ">
        <div
          className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga2Images[currentImage]} ]`}
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
      <div className="flex flex-col xl:flex-row w-full  h-[120vh] xl:h-[60vh]  bg-redCesena-400 ">
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
        <Cta scrollToForm={scrollToForm} />
        <div
          className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga3Images[currentImage]}`}
        >
          {/* Immagine 3 */}
        </div>
      </div>
    </div>
  );
}

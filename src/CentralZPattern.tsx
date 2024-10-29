import Cta from "./components/Cta";
// import TruckAnimation from "./components/TruckAnimation";
import { ICentralZPattern } from "./interfaces/ICentralZPattern";
export default function CentralZPattern({
  riga1Images,
  riga2Images,
  riga3Images,
  // riga4Images,
  scrollToForm,
  currentImage,
}: ICentralZPattern) {
  return (
    <section className="flex flex-col w-full ">
      {/* Row 1 */}
      <div className="flex flex-col xl:flex-row w-full h-[140vh] xl:h-[60vh]  bg-redCesena-400">
        <div className="bg-redCesena-400 xl:w-1/2 w-full h-full flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-redCesena-990 font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
              NOLEGGIO
            </h2>
            <h2 className="text-redCesena-990 font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4">
              ELEVATORE
            </h2>
          </div>

          <p className="m-4 mb-20 px-16 xl:px-40 font-title text-base font-medium leading-6 xl:text-xl text-white">
            Devi portare un divano, un grande frigorifero o un mobile
            ingombrante su per le scale o attraverso una porta stretta? Con i
            nostri carreli elevatori ed il personale specializzato, tutto
            diventa più semplice, veloce e sicuro.
            <br className="mb-6" />
            Evita sforzi inutili e riduci i rischi di danni: affidati ai nostri
            montacarichi ed alla nostra squadra per un trasporto senza pensieri.
          </p>

          {/* <div className="md:hidden">
            <TruckAnimation />
          </div> */}
        </div>

        <Cta scrollToForm={scrollToForm} />

        <div
          className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga1Images[currentImage]}`}
        >
          {/* Immagine 1 */}
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-col-reverse xl:flex-row w-full h-[120vh] xl:h-[60vh]  ">
        <div
          className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga2Images[currentImage]} ]`}
        >
          {/* Immagine 2 */}
        </div>
        <div className="bg-bluCesena-500 xl:w-1/2 w-full h-full flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <h2 className="text-white font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
              DEPOSITO
            </h2>
          </div>
          <p className="m-4 mb-20 px-16 xl:px-40 font-title text-base font-medium leading-6 xl:text-xl text-redCesena-990">
            Cerchi uno spazio sicuro dove tenere i tuoi mobili durante un
            trasloco o per altre esigenze? Offriamo un servizio di deposito a
            breve e lungo termine, garantendo sicurezza e protezione per ogni
            tuo oggetto.
            <br className="mb-6" />
            Con noi, il tuo spazio temporaneo non è mai stato così affidabile!
          </p>
          {/* <div className="xl:hidden">
            <TruckAnimation />
          </div> */}
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col xl:flex-row w-full  h-[180vh]  xl:h-[60vh]  bg-redCesena-400 ">
        <div className="bg-redCesena-400 xl:w-1/2 w-full h-full flex-COL justify-center items-center">
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-redCesena-990 font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
              MONTAGGIO
            </h2>
            <p className="text-redCesena-990 font-title tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4">
              &
            </p>
            <h2 className="text-redCesena-990 font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-4">
              SMONTAGGIO
            </h2>
          </div>
          <p className="m-4 mb-20  px-16 xl:px-40 font-title text-base font-medium leading-6  xl:text-xl text-white">
            Sia che il tuo mobilio vada in deposito o venga subito trasportato
            in molte occasioni e piu' comodo e sicuro smontare alcuni tipi di
            mobilio.
            <br className="mb-6" />
            Smontiamo e rimontiamo i tuoi mobili con precisione e cura.
          </p>
          {/* <div className="md:hidden">
            <TruckAnimation />
          </div> */}
        </div>
        <Cta scrollToForm={scrollToForm} />
        <div
          className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga3Images[currentImage]}`}
        >
          {/* Immagine 3 */}
        </div>
      </div>
      {/* Row 4 */}
      <div className="flex flex-col-reverse xl:flex-row w-full h-[140vh] xl:h-[60vh]   ">
        <div
          // className={`bg-cover bg-no-repeat xl:w-1/2 w-full h-full ${riga4Images[currentImage]} ]`}
          className={` xl:w-1/2 w-full h-full `}
        >
          <div className="object-cover flex justify-center bg-white max-h-[40rem]">
            <video loop autoPlay muted>
              <source src="/img/video1.mp4" type="video/mp4"></source>
            </video>
          </div>
          {/* Immagine 4 */}
        </div>
        <div className="bg-bluCesena-500 xl:w-1/2 w-full h-full flex-col justify-center items-center">
          <div className="flex justify-center items-center ">
            <h2 className="text-white  font-title mb-16 tracking-[0.35em] md:tracking-[0.75em] text-lg md:text-xl font-bold leading-4 flex justify-center items-center mt-16 lg:mt-28">
              SGOMBERI
            </h2>
          </div>
          <p className="m-4 mb-20 px-16 xl:px-40 font-title text-base font-medium leading-6 xl:text-xl text-redCesena-990">
            Hai bisogno di liberare spazi pieni di vecchi oggetti o mobili che
            non usi più? Offriamo un servizio di sgombero professionale per
            abitazioni, uffici e locali commerciali, garantendo rapidità e
            precisione nel recupero e nello smaltimento dei tuoi beni.
            <br className="mb-6" />
            Dimentica il disordine e torna a godere appieno dei tuoi spazi!
          </p>
          {/* <div className="xl:hidden">
            <TruckAnimation />
          </div> */}
        </div>
      </div>
    </section>
  );
}

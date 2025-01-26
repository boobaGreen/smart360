import { useEffect } from "react";
import { dataUltimoAggiornamentoPrivacy } from "../utils/costants";

interface PrivacyModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const PrivacyModal = ({ isVisible, setIsVisible }: PrivacyModalProps) => {
  useEffect(() => {
    const hasAccepted = localStorage.getItem("privacyAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, [setIsVisible]);

  const handleAccept = () => {
    localStorage.setItem("privacyAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-40 bg-redCesena-600 ">
      <div className="bg-white p-8 rounded-lg md:max-w-lg mx-10 shadow-lg overflow-y-auto max-h-[80vh] text-redCesena-900">
        <h2 className="text-xl font-semibold mb-4">
          Informativa sulla Privacy
        </h2>
        <p className="text-sm mb-4">
          Ai sensi del Regolamento (UE) 2016/679 (GDPR) e della normativa
          italiana vigente. La presente informativa è redatta ai sensi
          dell’articolo 13 del Regolamento Generale sulla Protezione dei Dati e
          si riferisce al trattamento dei dati personali degli utenti che
          visitano e utilizzano il sito [NomeSito].com.
        </p>

        <h3 className="text-md font-semibold mt-4 mb-2">
          1. Titolare del trattamento
        </h3>
        <p className="text-sm mb-4">
          Il titolare del trattamento è [Nome Azienda/Persona, con indirizzo e
          contatti] (di seguito, "Titolare").
        </p>

        <h3 className="text-md font-semibold mt-4 mb-2">
          2. Tipologie di dati raccolti
        </h3>
        <p className="text-sm mb-2">Dati di contatto:</p>
        <ul className="text-sm list-disc ml-6 mb-4">
          <li>Nome</li>
          <li>Email</li>
          <li>Numero di telefono (se fornito)</li>
          <li>Messaggio</li>
        </ul>

        <h3 className="text-md font-semibold mt-4 mb-2">
          3. Finalità del trattamento e base giuridica
        </h3>
        <p className="text-sm mb-2">
          Il trattamento dei dati personali è effettuato con le seguenti
          finalità e basi giuridiche:
        </p>
        <ul className="text-sm list-disc ml-6 mb-4">
          <li>
            Gestione delle richieste di contatto e avvio del rapporto di
            servizio. La base giuridica è l’esecuzione di misure precontrattuali
            o contrattuali richieste dall’interessato (art. 6, par. 1, lett. b,
            GDPR).
          </li>
          <li>
            Cancellazione periodica delle comunicazioni. I dati saranno
            conservati solo per il tempo necessario per fornire il servizio e
            saranno periodicamente eliminati.
          </li>
        </ul>

        <h3 className="text-md font-semibold mt-4 mb-2">
          4. Dati di navigazione e uso di Simple Analytics
        </h3>
        <p className="text-sm mb-4">
          Utilizziamo Simple Analytics per monitorare le visite al sito, uno
          strumento conforme al GDPR, che non raccoglie né conserva dati
          personali. Non è necessario il consenso tramite banner in quanto non
          sono installati cookie di profilazione o di terze parti.
        </p>

        <h3 className="text-md font-semibold mt-4 mb-2">
          5. Modalità di trattamento e sicurezza dei dati
        </h3>
        <p className="text-sm mb-4">
          Il trattamento dei dati personali è effettuato con strumenti
          informatici e manuali, con misure di sicurezza per proteggere i dati
          da accessi non autorizzati, alterazioni, perdite o distruzione.
        </p>

        <h3 className="text-md font-semibold mt-4 mb-2">
          6. Periodo di conservazione dei dati
        </h3>
        <p className="text-sm mb-4">
          I dati saranno conservati per il tempo necessario a rispondere alla
          richiesta dell’utente e per l’esecuzione del servizio. Dopo tale
          periodo, i dati saranno eliminati periodicamente.
        </p>

        <h3 className="text-md font-semibold mt-4 mb-2">
          7. Diritti dell’interessato
        </h3>
        <p className="text-sm mb-2">L’utente ha il diritto di:</p>
        <ul className="text-sm list-disc ml-6 mb-4">
          <li>
            Ottenere la conferma dell’esistenza dei dati che lo riguardano e di
            ottenerne l’accesso.
          </li>
          <li>Richiedere la rettifica dei dati inesatti o incompleti.</li>
          <li>
            Ottenere la cancellazione dei dati nei casi previsti dall’articolo
            17 del GDPR.
          </li>
          <li>Opporsi al trattamento dei dati personali.</li>
          <li>
            Ottenere la limitazione del trattamento in conformità all’articolo
            18 del GDPR.
          </li>
        </ul>
        <p className="text-sm mb-4">
          Per l’esercizio dei diritti sopra elencati, l’interessato può
          contattare il Titolare all’indirizzo email: [Email Titolare].
        </p>

        <h3 className="text-md font-semibold mt-4 mb-2">
          8. Modifiche all'informativa
        </h3>
        <p className="text-sm mb-4">
          Il Titolare si riserva il diritto di modificare o aggiornare questa
          informativa per garantire il rispetto della normativa vigente.
          Eventuali modifiche saranno comunicate sul sito.
        </p>

        <p className="text-xs mt-2 mb-6">
          Ultimo aggiornamento: {dataUltimoAggiornamentoPrivacy}.
        </p>
        <div className="flex justify-center mt-12">
          <button
            onClick={handleAccept}
            className="bg-bluCesena-500 w-auto text-white py-2 px-4 rounded hover:bg-blue-600 hover:bg-bluCesena-600 "
          >
            Accetto
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;

import emailjs from "emailjs-com"; // Import EmailJS
import { useState } from "react";
import Chiama from "./components/Chiama";
import { useMediaQuery } from "react-responsive";
import { tel1, tel1Android } from "./utils/costants";
import { initEmailjs } from "./utils/costants";

emailjs.init(initEmailjs); // Initialize EmailJS with your User ID

interface FormProps {
  setIsVisible: (visible: boolean) => void;
}

export default function Form({ setIsVisible }: FormProps) {
  // Accept setIsVisible as a prop
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Aggiungi il campo telefono
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [buttonText, setButtonText] = useState("CHIAMA");
  const handleButtonClick = () => {
    setButtonText(tel1);
    if (isMobile) {
      window.location.href = tel1Android;
    }
  };

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePrivacyChange = () => {
    setPrivacyAccepted(!privacyAccepted);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!privacyAccepted) {
      setStatusMessage("Devi accettare la privacy per inviare il modulo.");
      return;
    }

    setLoading(true);
    emailjs
      .send("service_s3jp2sp", "template_xablkhb", formData)
      .then(() => {
        setStatusMessage("Messaggio Ricevuto! Grazie per averci contattato.");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Resetta anche il campo telefono
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatusMessage(
          "Ops ... qualcosa è andato storto. Riprova più tardi."
        );
        setLoading(false);
      });
  };

  return (
    <div className="font-title">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3 className="sm:text-3xl text-xl font-bold title-font mb-4 text-gray-900">
              Per un preventivo gratuito
            </h3>
            <h3 className="font-bold sm:text-3xl text-xl title-font mb-4 text-gray-900">
              o per qualsiasi dubbio ...
            </h3>
            <h3 className="my-16 text-5xl font-medium title-font mb-4 text-gray-900 uppercase text-white animate-ping">
              Scrivici
            </h3>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-16 font-medium">
              Non esitare a contattarci per un preventivo gratuito o per
              qualsiasi dubbio inerente i nostri servizi
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium">
              Se preferisci chiamaci al telefono ore ufficio o scrivici su
              WhatsApp
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap -m-2 justify-center"
            >
              <div className="p-2 w-2/3">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-2/3">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-2/3">
                {" "}
                {/* Aggiungi il campo telefono */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-2/3">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Checkbox per l'accettazione della privacy */}
              <div className="p-2 w-full">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="privacyCheck"
                    checked={privacyAccepted}
                    onChange={handlePrivacyChange}
                    className="mr-2 leading-tight"
                    required
                  />
                  <label
                    htmlFor="privacyCheck"
                    className="text-sm text-gray-600"
                  >
                    Ho preso nota della{" "}
                    <a
                      onClick={() => setIsVisible(true)}
                      href="#privacy"
                      className="text-blue-600 underline"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              {statusMessage && (
                <div className="mt-4 text-center flex justify-center items-center w-full">
                  <p className="text-gray-600 mt-14">{statusMessage}</p>
                </div>
              )}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="uppercase shadow-md shadow-redCesena-500 flex mx-auto text-white bg-redCesena-300 border-0 py-2 px-8 focus:border-2 hover:border-4 border-redCesena-600 rounded text-lg font-bold hover:animate-wiggle mt-14"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8l4 4a8 8 0 01-8 8v-8l-4-4z"
                        ></path>
                      </svg>
                      Inviando...
                    </div>
                  ) : (
                    "Invia"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-16 flex justify-center items-center">
            <Chiama
              handleButtonClick={handleButtonClick}
              buttonText={buttonText}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

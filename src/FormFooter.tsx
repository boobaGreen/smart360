import emailjs from "emailjs-com"; // Import EmailJS
import { useState } from "react";
import Chiama from "./components/Chiama";
import { useMediaQuery } from "react-responsive";
import { tel1, tel1Android } from "./utils/costants";

emailjs.init("ZTJIhDAk7ja1Snpln"); // Initialize EmailJS with your User ID

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [buttonText, setButtonText] = useState("CHIAMA");
  const handleButtonClick = () => {
    setButtonText(tel1);
    if (isMobile) {
      window.location.href = tel1Android;
    }
  };
  const [statusMessage, setStatusMessage] = useState(""); // State for status messages
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading state to true

    emailjs
      .send("service_s3jp2sp", "template_xablkhb", formData)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatusMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false); // Set loading state to false after success
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatusMessage("Failed to send email. Please try again.");
        setLoading(false); // Set loading state to false after error
      });
  };

  return (
    <div className="font-title">
      <section className="text-gray-700 body-font">
        {" "}
        {/* Make section relative */}
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
              qualsiasi dubbio inerente i nostri servizi , saremo felici di
              risponderti entro massimo 24 ore.
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium">
              Se preferisci chiamaci al telefono ore ufficio o scrivici su
              WhatsApp
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
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
              <div className="p-2 w-1/2">
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
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
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
                          d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                        ></path>
                      </svg>
                      Invio...
                    </div>
                  ) : (
                    "INVIA"
                  )}
                </button>
                <div className="flex justify-center items-center mt-24">
                  <Chiama
                    handleButtonClick={handleButtonClick}
                    buttonText={buttonText}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

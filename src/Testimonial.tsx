import React from "react";

const testimonials = [
  {
    name: "Samantha Brunacci",
    photo: "/img/testimonial1.webp",
    text: "Ragazzi straordinari per cortesia,competenza e abilita'. Puntuali e precisi, accurati, rapidi e molto tranquilli. ",
    rating: 4, // Aggiunta del punteggio
  },
  {
    name: "Giulia Pazzaglia",
    photo: "/img/testimonial2.webp",
    text: "Sono stati molto professionali e disponibili. Hanno fatto un lavoro eccellente e sono stati molto attenti ai dettagli. ",
    rating: 5, // Aggiunta del punteggio
  },
  {
    name: "Max Damioli",
    photo: "/img/max.webp",
    text: " Lavorano come le dita di una mano di un musicista in squadra. Amano il loro lavoro e lo fanno con passione. Consiglio senza alcuna riserva!",
    rating: 5, // Aggiunta del punteggio
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center absolute top-4 right-4">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.125-6.569L1 7.82l6.569-.951L10 1l2.431 5.869L19 7.82l-4.247 3.701 1.125 6.569z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-10 bg-white px-20 xl:py-60">
      <h2 className="text-2xl font-bold text-center mb-20 mt-12 font-title">
        Cosa dicono i nostri clienti
      </h2>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-40 gap-20   ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-bluCesena-500 to-bluCesena-200  shadow-lg rounded-lg p-5 relative mb-10 w-64 md:w-80 hover:scale-125 hover:animate-none  "
          >
            <StarRating rating={testimonial.rating} />{" "}
            {/* Aggiunta delle stelle */}
            <div className="flex items-center mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <h3 className="font-bold font-title text-redCesena-900 ml-2 mt-8">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-redCesena-900 font-title">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

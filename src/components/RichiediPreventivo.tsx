interface RichiediPreventivoProps {
  scrollToForm: () => void;
}

export default function RichiediPreventivo({
  scrollToForm,
}: RichiediPreventivoProps) {
  return (
    <button
      onClick={scrollToForm}
      className="hover:border-redCesena-200 animate-bounce hover:scale-110 scale-100 hover:animate-none border-4 border-redCesena-800 bg-redCesena-400 text-white font-title text-xl font-bold py-2 px-4 min-w-80 shadow-md shadow-redCesena-990"
    >
      <p className="">RICHIEDI UN PREVENTIVO</p>
    </button>
  );
}

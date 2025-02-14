import {
  tel1,
  tel2,
  email,
  via,
  civico,
  comune,
  cap,
  provincia,
  partitaIva,
  ragioneSociale,
  ragioneSociale2,
} from "./utils/costants";

export default function Footer() {
  return (
    <footer className="font-title font-semibold pt-0  text-center mt-0 text-redCesena-900 w-auto flex flex-col justify-center items-center ">
      <div className="w-auto border-t border-gray-200 mb-12"></div>

      <p> Giuseppe </p>
      <p> {tel1}</p>

      <p className="mt-4">Filippo</p>
      <p>{tel2}</p>

      <p className="mt-4"> {email}</p>

      <div className="font-title font-normal text-sm">
        <div className="leading-snug my-5">
          <p>{ragioneSociale}</p>
          <p>{ragioneSociale2}</p>
          {via} <span>{civico}</span>
          <br />
          {comune} {cap} {provincia}
          <br />
          <br />
          P.I. {partitaIva}
        </div>
      </div>
      <span className="inline-flex ">
        <a className="">
            
        </a>
      </span>
    </footer>
  );
}

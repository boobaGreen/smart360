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
} from "./utils/costants";

export default function Footer() {
  return (
    <div className="font-title font-semibold pt-0  text-center mt-0 text-redCesena-900 w-auto flex flex-col justify-center items-center ">
      <div className="w-1/2 border-t border-gray-200 mb-12"></div>
      <br /> <br />
      Filippo: {tel1} <br />
      Giuseppe: {tel2} <br /> <br />
      <a className="">{email}</a> <br />
      <p className="leading-normal my-5">
        {via} <span>{civico}</span>
        <br />
        {comune} {cap} {provincia}
        <br />
        <br />
        P.I. {partitaIva}
      </p>
      <span className="inline-flex ">
        <a className="">
          {/* Social media icons */}
          {/* Your SVG icons go here */}
        </a>
      </span>
    </div>
  );
}

import { routes } from "../utils/routes";

interface NavDesktopProps {
  setIsVisible: (isVisible: boolean) => void;
}

export const NavDesktop = ({ setIsVisible }: NavDesktopProps) => {
  // Funzione per gestire il click sulla voce "Privacy"
  const handlePrivacyClick = () => {
    localStorage.setItem("privacyAccepted", "false"); // Azzera il valore di privacyAccepted
    // Puoi anche aggiungere qui qualsiasi logica aggiuntiva che desideri
    setIsVisible(true);
  };
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-base">
      {routes.map((route, index) => {
        const { Icon, href, title } = route;
        return (
          <li key={`route-${index}`}>
            <a
              href={href}
              onClick={title === "Privacy" ? handlePrivacyClick : undefined} // Chiama la funzione solo se la voce è "Privacy"
              className="flex items-center gap-1 hover:text-neutral-400 transition-all font-title font-bold text-white hover:animate-bounce"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

import { routes } from "../utils/routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-base">
      {routes.map((route, index) => {
        const { Icon, href, title } = route;
        return (
          <li key={`route-${index}`}>
            {" "}
            {/* Usato un contatore come chiave univoca */}
            <a
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all font-title font-bold text-white hover:animate-bounce "
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

import { useClickAway } from "react-use";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../utils/routes";

interface NavMobileProps {
  setIsVisible: (isVisible: boolean) => void;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const NavMobile = ({
  setIsVisible,
  isOpen,
  setOpen,
}: NavMobileProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handlePrivacyClick = () => {
    localStorage.setItem("privacyAccepted", "false"); // Azzera il valore di privacyAccepted
    setIsVisible(true);
  };

  // Effect to toggle scroll behavior on the body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div ref={ref} className="lg:hidden text-white z-50 ">
      <div className="text-redCesena-500">
        <Hamburger toggled={isOpen} size={20} onToggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] mt-0 bg-neutral-950 border-b border-b-white/20 md:mt-4 flex justify-center"
          >
            <ul className="grid gap-2 px-20 py-20 mx-2 rounded-3xl">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-bluCesena-200 via-bluCesena-500 to-bluCesena-700"
                  >
                    <a
                      onClick={() => {
                        // Chiama handlePrivacyClick solo se la voce è "Privacy"
                        if (route.title === "Privacy") {
                          handlePrivacyClick();
                        }
                        setOpen(false); // Chiude il menu dopo il clic
                      }}
                      className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-xl" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import CloseIcon from "../assets/icons/close.png";
import MenuIcon from "../assets/icons/menu.png";
import IntroOverlay from "../components/IntroOverlay/IntroOverlay";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";
import { ButtonConect } from "./components/ButtonConnect";

export const MainLayout = ({
  smoothRef,
  children,
  onScrollToAbout = () => {},
  onScrollToExperience = () => {},
  // onScrollToProject = () => {},
}) => {
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        headerRef.current.classList.add("header--hidden");
      } else {
        headerRef.current.classList.remove("header--hidden");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <IntroOverlay />

      <header ref={headerRef} className="header">
        <nav>
          <div className="header__nav">
            <a href="/">TED</a>

            <div className="header__nav-desktop">
              <ul className="header__nav-navigation">
                <li onClick={onScrollToAbout}>About</li>
                <li onClick={onScrollToExperience}>Experience</li>
                {/* <li onClick={onScrollToProject}>Project</li> */}
              </ul>

              <ButtonConect />
            </div>

            <button
              className="header__nav-btn-toggle"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className="icon-menu"
                aria-hidden="true"
                src={MenuIcon}
                width={40}
                height="auto"
                alt="Menu Icon"
                title="Hamburger icons created by See Icons - Flaticon"
                loading="lazy"
              />
              <img
                className="icon-close"
                aria-hidden="true"
                src={CloseIcon}
                width={40}
                height="auto"
                alt="Close Icon"
                title="Close icons created by SeyfDesigner - Flaticon"
                loading="lazy"
              />
            </button>
          </div>

          <div className={`header__nav-mobile ${isOpen ? "is-open" : ""}`}>
            <ul className="header__nav-mobile-navigation">
              <li onClick={onScrollToAbout}>About</li>
              <li onClick={onScrollToExperience}>Experience</li>
              {/* <li onClick={onScrollToProject}>Project</li> */}
            </ul>

            <ButtonConect />
          </div>
        </nav>
      </header>

      <SmoothScroll ref={smoothRef}>{children}</SmoothScroll>
    </>
  );
};

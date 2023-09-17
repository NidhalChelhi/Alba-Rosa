import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-o z-20 ${
        scrolled ? "bg-beige" : ""
      }`}
    >
      <div className="w-full flex justify-around items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-5"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {scrolled ? (
            <img
              src="/icons/symbol_dark.svg"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          ) : (
            <img
              src="/icons/symbol_light.svg"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          )}{" "}
          <p
            className={`${
              scrolled ? "text-primary" : "text-beige"
            }  font-serif text-4xl font-black cursor-pointer flex`}
          >
            Alba Rosa
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              // className={`${
              //   active === link.title ? "text-yellow" : "text-white"
              // } hover:text-yellow text-xl font-semibold cursor-pointer`}
              onClick={() => setActive(link.title)}
              className={`
              ${scrolled ? "text-primary" : "text-white"}
              ${active === link.title ? "text-blue" : "text-primary"}
               hover:text-yellow text-xl font-semibold cursor-pointer
              `}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
            ${
              !toggle ? "hidden" : "flex"
            } p-6 bg-beige absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl
            `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-yellow" : "text-primary"
                  } font-poppins font-semibold cursor-pointer text-lg`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

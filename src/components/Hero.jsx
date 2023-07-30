import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center items-center gap-5`}
      >
        <h1 className="text-5xl text-white text-center font-serif font-bold sm:text-7xl">
          Un restaurant qui
        </h1>
        <h1 className="text-5xl text-white text-center font-serif font-bold sm:text-7xl py-4 ">
          Réveille vos papilles
        </h1>
        <h1 className="text-5xl text-white text-center font-serif font-bold sm:text-7xl">
          Et éveille vos sens.
        </h1>

        <div className="my-12 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-6">
          <a
            href="#menu"
            className="rounded-full flex  items-center gap-x-4 bg-yellow px-5 py-4 text-2xl font-semibold text-primary hover:bg-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transform transition duration-300 hover:scale-105"
          >
            <FaBars />
            Afficher le Menu
          </a>
          <a
            href="#about"
            className="text-2xl items-center text-white font-semibold leading-6 transform transition duration-300 hover:scale-105"
          >
            À propos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#menu">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-beige flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-beige mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/";
import { textVariant } from "../utils/motions";
const stats = [
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
const About = () => {
  return (
    <>
      <div className="sm:flex mx-auto max-w-7xl px-6 lg:px-8 items-center">
        <div className="pb-10 pr-5">
          <div>
            <p className={styles.sectionSubText}>Qui sommes-nous ?</p>
            <h2 className={styles.heroHeadText}>À PROPOS.</h2>
          </div>
          <p className="mt-6 text-lg leading-8  ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base text-gray leading-7 ">{stat.name}</dt>
                <dd className="text-2xl text-gray font-bold leading-9 tracking-tight  ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full max-w-[800px] mx-auto ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.098411811663!2d10.116258111803262!3d33.88711922631857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556f5e00767465%3A0x905316591f206f0d!2salba%20rosa!5e0!3m2!1sen!2sus!4v1690719068318!5m2!1sen!2sus"
            width="100%" // Set the desired width here, it will be responsive up to the max-width
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            title="map"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </>
  );
};

const AboutWithSectionWrapper = SectionWrapper(About, "about");

export default AboutWithSectionWrapper;

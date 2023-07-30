import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/";
import { textVariant } from "../utils/motions";
import { products } from "../constants";
import ProductCard from "./ProductCard";

const Promo = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Découvrez nos meilleurs plats</p>
        <h2 className={styles.heroHeadText}>PLUS VENDU.</h2>
      </motion.div>

      <div id="products" className="mt-10 flex flex-wrap gap-7">
        {products
          .filter((product) => product.discountPercentage > 0)
          .map((filteredProduct, index) => {
            console.log(filteredProduct);
            return (
              <ProductCard key={index} index={index} {...filteredProduct} />
            );
          })}
      </div>
    </>
  );
};
const PromoWithSectionWrapper = SectionWrapper(Promo, "");

export default PromoWithSectionWrapper;

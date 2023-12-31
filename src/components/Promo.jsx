import { styles } from "../styles";
import { SectionWrapper } from "../hoc/";
import { products } from "../constants";
import ProductCard from "./ProductCard";

const Promo = () => (
  <>
    <div>
      <p className={styles.sectionSubText}>Découvrez nos promotions</p>
      <h2 className={styles.heroHeadText}>PROMOTIONS.</h2>
    </div>

    <div id="products" className="mt-10 flex flex-wrap gap-7">
      {products
        .filter((product) => product.discountPercentage > 0)
        .map((filteredProduct, index) => {
          console.log(filteredProduct);
          return <ProductCard key={index} index={index} {...filteredProduct} />;
        })}
    </div>
  </>
);

const PromoWithSectionWrapper = SectionWrapper(Promo, "");

export default PromoWithSectionWrapper;

import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/";
import { textVariant } from "../utils/motions";
import { categories, products } from "../constants";
import ProductCard from "./ProductCard";

const Menu = () => {
  const active_categories = [];

  for (let i = 0; i < products.length; i++) {
    active_categories.push(products[i].category);
  }

  const [menuTab, setMenuTab] = useState(active_categories[0]);
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };
  const scrollToProductSection = () => {
    const productSection = document.getElementById("products");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Découvrez notre menu</p>
        <h2 className={styles.heroHeadText}>MENU.</h2>
      </motion.div>
      <div className="mt-5 sm:flex-wrap sm:flex grid grid-cols-2 justify-center ">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={`m-2 grid justify-items-center items-center  

                  ${
                    active_categories.includes(category.name)
                      ? menuTab === category.name
                        ? styles.active_menu_tab
                        : styles.menu_tab
                      : `${styles.disabled_menu_tab} bg-[#e5e5e5]`
                  }
           `}
              onClick={() => {
                if (active_categories.includes(category.name)) {
                  handleMenuTabs(category.name);
                  scrollToProductSection();
                }
              }}
            >
              <div
                className={`  relative w-16 h-16 my-2 rounded-full flex justify-center items-center cursor-pointer
                ${active_categories.includes(category.name) ? ` bg-beige` : ""}
                `}
              >
                <p className="text-3xl"> {category.icon}</p>
              </div>
              <p
                className={` ${
                  active_categories.includes(category.name)
                    ? `text-white`
                    : ` text-[#5e5e5e]`
                }`}
              >
                {category.name}
              </p>
            </div>
          );
        })}
      </div>

      <div id="products" className="mt-10 flex flex-wrap gap-7">
        {products
          .filter((product) => product.category === menuTab)
          .map((filteredProduct, index) => {
            return (
              <ProductCard key={index} index={index} {...filteredProduct} />
            );
          })}
      </div>
    </>
  );
};
const MenuWithSectionWrapper = SectionWrapper(Menu, "menu");

export default MenuWithSectionWrapper;

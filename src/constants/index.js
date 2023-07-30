const navLinks = [
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "about",
    title: "À Propos",
  },
];

const categories = [
  { name: "Plats", icon: "🍽️" },
  { name: "Makloub", icon: "🧇" },
  { name: "Baguette Farcie", icon: "🧇" },
  { name: "Gaufres Sucrées", icon: "🥞" },
  { name: "Crépes Sucrées", icon: "🥨" },
  { name: "Crépes Salées", icon: "🥨" },
  { name: "Paninis", icon: "🥪" },
  { name: "Cheesecake", icon: "🍰" },
  { name: "Cocktails", icon: "🍹" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burger", icon: "🍔" },
  { name: "Boissons", icon: "🍹" },
];

const N = 50;

const products = [];
for (let i = 0; i < N; i++) {
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomPrice = parseFloat((Math.random() * (100 - 4) + 4).toFixed(2)); // Random float between 4 and 100 with 2 digits after the decimal point

  // Generate a random number between 0 and 1
  const discountChance = Math.random();

  let randomDiscountPercentage;
  if (discountChance < 0.9) {
    // 80% chance of no discount
    randomDiscountPercentage = 0;
  } else {
    // 20% chance of a random discount between 0.1 and 30 with one decimal place
    randomDiscountPercentage = parseFloat((Math.random() * 30).toFixed(1));
  }
  const product = {
    name: `Product ${i + 1}`,
    category: randomCategory.name,
    href: "#",
    imageSrc: `https://source.unsplash.com/random/300x300/?${randomCategory.name}`,
    imageAlt: "Product Image",
    price: randomPrice,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    discountPercentage: randomDiscountPercentage,
  };
  products.push(product);
}

export { navLinks, categories, products };

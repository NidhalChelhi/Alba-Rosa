import { BrowserRouter } from "react-router-dom";

import { About, Hero, Menu, Navbar, Promo, Footer } from "./components/";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-beige relative z-0">
        <Navbar />
        <div
          className="hero-pattern relative bg-cover bg-center"
          style={{
            minHeight: "100vh",
            backgroundImage:
              'url("https://img.freepik.com/free-photo/tasty-homemade-traditional-pizza-italian-recipe_24972-2143.jpg?w=1380&t=st=1689252879~exp=1689253479~hmac=62b4fc30000dbfeb192e46f67b39e834277db47573c40f83ad0a28d4901d7929")',
          }}
        >
          <div className="absolute inset-0 bg-opacity-60 bg-black"></div>
          <Hero />
        </div>
        <Menu />
        <Promo />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import About from "../About/About";
import MainCategory from "../AllCategories/MainCategory";
import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Hero from "../Hero/Hero";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Category />
      <MainCategory />
      <About />
      <Discount />
    </div>
  );
};

export default HomeScreen;

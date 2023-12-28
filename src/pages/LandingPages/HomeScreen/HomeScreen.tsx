
import MainCategory from "../AllCategories/MainCategory";
import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Hero from "../Hero/Hero";
import Middle from "../Middle/Middle";
import Subscribe from "../Subscribe/Subscribe";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Category />
      <MainCategory />
      <Middle/>
      <Discount />
      <Subscribe/>
    </div>
  );
};

export default HomeScreen;

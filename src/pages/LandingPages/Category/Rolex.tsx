import AllCategory from "./AllCategory";
import { categoriesData } from "./CategoryData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";
import { NavLink } from "react-router-dom";

const Rolex = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25px",
        },
      },
    ],
  };

  return (
    <div className="card p-[10px]" id="rolex">
      <NavLink to="/shop-now">
        <Slider {...settings} className="w-full">
          {categoriesData.map((category, index) => (
            <div key={index} className="flex justify-center">
              <AllCategory imageUrl={category.imageUrl} text={category.text} />
            </div>
          ))}
        </Slider>
      </NavLink>
    </div>
  );
};

export default Rolex;

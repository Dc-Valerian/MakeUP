import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import "./HeroStyle.css";
import CountdownTimer from "../Discount/CountDownTimer";
import DownloadButton from "../../../components/Props/ButtonProps";

const slides = [
  {
    bgImage:
      "https://media.istockphoto.com/id/1180493213/photo/professional-eyebrow-care.jpg?s=612x612&w=0&k=20&c=Ulcv0oqs35iwv1LUukNJPq3TbFfTUl-imJSnOSEiXCU=",
    title: "Smart Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://media.istockphoto.com/id/1201490222/video/golden-makeup-for-a-golden-beauty.jpg?s=640x640&k=20&c=xtsG8Okw7HDVdRd6WWNRS8t4_Pja8vFY1mAqX7jluDk=",
    title: "Rolex Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://media.istockphoto.com/id/171582019/photo/applying-professional-make-up.jpg?s=612x612&w=0&k=20&c=BLxT1Chqzhb875Gfj3BjsxkZJE4OlaIi0P4Zfy5Se0I=",
    title: "Casio Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

  {
    bgImage:
      "https://media.istockphoto.com/id/1484788081/photo/woman-face-and-makeup-brush-for-skincare-cosmetics-and-dermatology-in-studio-application.jpg?s=612x612&w=0&k=20&c=_WIyfs39BE0D9GQlIs67uQsjbdlT5rsW3RFwRC_L3Xk=",
    title: "Tissot Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

  {
    bgImage:
      "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D",
    title: "NaviForce Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },

  {
    bgImage:
      "https://images.unsplash.com/photo-1551723454-7565a1f5b161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
    title: "G Shock Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://res.cloudinary.com/dbpcptmco/image/upload/v1702037861/MRW200H-2BV_ns6kri.jpg",
    title: "Skmei Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
  {
    bgImage:
      "https://i.etsystatic.com/9186495/c/3000/3000/0/0/il/83fddc/5044732319/il_600x600.5044732319_7kvd.jpg",
    title: "Cartier Watch Series",

    sub: "Featured packed at better value than ever. Powerful sensor to monitor your fitness",
  },
];

const Superhero = () => {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 10);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "unset";
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 600,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <div id="home" className="hero overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[100vh] flex justify-center  overflow-hidden mainHero "
          >
            <div className="bg-[#F3F4F6] w-full bg-opacity-50 items-center justify-center flex h-[90%] mt-[30px] ">
              <div className="w-[95%] flex items-center justify-center h-[95%] mainHero">
                <div className=" w-[50%] h-[90%] flex flex-col justify-center gap-[30px] mainHeroFirst">
                  <Fade
                    delay={1e3}
                    cascade
                    damping={1e-1}
                    className="text-[24px] font-[600] text-[#E9522E] mainHeroFirstText"
                  >
                    SALE UP TO 30% OFF
                  </Fade>
                  <h1 className="text-[#161616] text-[50px] font-[600] leading-[50px] mainHeroFirstTitle">
                    {slide.title}
                  </h1>

                  <CountdownTimer />

                  <div className=" mt-[20px] flex items-center">
                    <DownloadButton text="Shop Now!" />
                  </div>
                </div>

                <div className=" w-[50%] h-[90%] flex items-center justify-center mainHeroSecond">
                  <img
                    src={slide.bgImage}
                    className="w-[95%] h-[95%] object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Superhero;

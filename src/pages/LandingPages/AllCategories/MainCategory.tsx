import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MainCategory = () => {
  return (
    <div className="w-[100%] flex h-[100%] flex-col pt-[50px] items-center">

      <div className="w-[95%] flex h-[100%] mt-[35px] flex-wrap justify-between lg:justify-center">
        <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
          <img
            src="https://res.cloudinary.com/daqpb7odj/image/upload/v1692350445/mclaoxk3kkukbqyjugnl.webp"
            alt=""
            className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105 object-cover"
          />

          <div className="w-[100%] p-[12px] flex-col">
            <div className="w-[100%] flex items-center justify-between">
              <h3 className="text-[25px]">MakeUp1</h3>
              <div className="flex items-center text-[gold]">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>

            <div className="flex items-center mt-[5px]">
              <p>NGN: ₦3000</p>
            </div>
          <br />

            <p className="mt-[5px]">Category: Hair</p>

            <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">
              <NavLink to={`/`}>View Recipes</NavLink>
            </button>
          </div>
        </div>
        <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
          <img
            src="https://res.cloudinary.com/daqpb7odj/image/upload/v1692350445/mclaoxk3kkukbqyjugnl.webp"
            alt=""
            className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105 object-cover"
          />

          <div className="w-[100%] p-[12px] flex-col">
            <div className="w-[100%] flex items-center justify-between">
              <h3 className="text-[25px]">MakeUp2</h3>
              <div className="flex items-center text-[gold]">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>

            <div className="flex items-center mt-[5px]">
              <p>NGN: ₦3000</p>
            </div>
            <br />

            <p className="mt-[5px]">Category: Hair</p>

            <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">
              <NavLink to={`/`}>View Categories</NavLink>
            </button>
          </div>
        </div>
        <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
          <img
            src="https://res.cloudinary.com/daqpb7odj/image/upload/v1692350445/mclaoxk3kkukbqyjugnl.webp"
            alt=""
            className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105 object-cover"
          />

          <div className="w-[100%] p-[12px] flex-col">
            <div className="w-[100%] flex items-center justify-between">
              <h3 className="text-[25px]">MakeUp3</h3>
              <div className="flex items-center text-[gold]">
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>

            <div className="flex items-center mt-[5px]">
              <p>NGN: ₦3000</p>
            </div>
            <br />

<p className="mt-[5px]">Category: Hair</p>

            <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">
              <NavLink to={`/`}>View Recipes</NavLink>
            </button>
          </div>
        </div>
        
      </div>

      <NavLink to="/recipies">
        <button className="w-[220px] h-[45px] mt-[50px] border border-third rounded flex justify-center items-center hover:bg-third hover:text-[#fff]">
          View more
        </button>
      </NavLink>
    </div>
  );
};

export default MainCategory;

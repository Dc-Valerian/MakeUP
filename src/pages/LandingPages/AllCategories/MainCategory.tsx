import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MainCategory = () => {
  return (
    <div className="w-[100%] flex h-[100%] flex-col pt-[50px] items-center">

      <div className="w-[95%] flex h-[100%] mt-[35px] flex-wrap justify-between lg:justify-center">
        <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D"
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
            src="https://images.unsplash.com/photo-1551723454-7565a1f5b161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D"
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
             src="https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D"
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

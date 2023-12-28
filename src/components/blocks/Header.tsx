import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const changeHeaderColor = () => {
    setShow(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <section>
      <div
        className={`w-[100%] h-[80px] flex justify-center ${
          show ? "fixed bg-first z-10" : "bg-[] fixed z-10"
        }`}
      >
        <div className="w-[95%] flex items-center justify-between">
          <img
            src="https://res.cloudinary.com/dbpcptmco/image/upload/v1701695953/WhatsApp_Image_2023-12-02_at_04.56.01_9fa268ad-removebg-preview_qmfbvw.png"
            alt=""
            className="md:w-[180px] w-[200px]"
          />

          <div className="flex items-center mt-[12px] lg:hidden">
            <NavLink to="/">
              <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-[#E95E25] transition transform hover:scale-x-100">
                Home
              </h3>
            </NavLink>
            <NavLink to="/shop-now">
              <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-[#E95E25] transition transform hover:scale-x-100">
                Category
              </h3>
            </NavLink>
            <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-[#E95E25] transition transform hover:scale-x-100">
              About Us
            </h3>
            <NavLink to="">
              <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-[#E95E25] transition transform hover:scale-x-100">
                Contact Us
              </h3>
            </NavLink>
          </div>

          <div className="flex items-center w-[200px] lg:hidden">
            <NavLink to="/sign-in">
              <div className="flex items-center mt-[12px] lg:hidden">
                <button className="w-[150px] h-[45px] rounded-md text-[#fff] border border-[#fff]">
                  Sign In
                </button>
              </div>
            </NavLink>
          </div>

          <div
            onClick={onOpenHandler}
            className="text-[#fff] text-[33px] cursor-pointer hidden lg:flex mt-[12px] md:text-[30px]"
          >
            <FiMenu />
          </div>

          <Dialog
            open={open}
            onClose={onCloseHandler}
            className="fixed inset-0 bg-white text-black z-50 "
            aria-labelledby="dialog-title"
          >
            <div className="h-screen flex-col lg:flex hidden">
              <div className="flex justify-between items-center p-4 shadow-md">
                <h5 className="text-[24px] font-medium">Menu</h5>
                <button
                  className="text-black text-[19px]"
                  onClick={onCloseHandler}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="flex flex-col py-3 px-2 overflow-y-auto h-[100%]">
                <NavLink to="/">
                  <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                    Home
                  </h3>
                </NavLink>

                <NavLink to="/recipies">
                  <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                  Category
                  </h3>
                </NavLink>

                <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                  About Us
                </h3>

                <NavLink to="/contact-us">
                  <h3 className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
                    Contact Us
                  </h3>
                </NavLink>

                <>
                  <NavLink to="/sign-in">
                    <div className="flex items-center mt-[12px] lg:hidden">
                      <button className="w-[150px] h-[45px] rounded-md border border-[lightgray]">
                        Sign In
                      </button>
                    </div>
                  </NavLink>
                </>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Header;

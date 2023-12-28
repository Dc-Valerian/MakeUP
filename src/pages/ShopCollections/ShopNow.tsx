import { CiSearch } from "react-icons/ci";
import { ProductDetail } from "./ProductDetail";

const ShopNow = () => {
  return (
    <div className="flex flex-wrap items-center justify-center  gap-[15px]">
      <div
      className=""
      >
      <div className="h-[100%] w-[100%] bg-recipehero bg-center bg-no-repeat bg-cover relative">
        <div
          className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex-col flex justify-center items-center md:pt-[100px] md:pb-[100px]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-[#fff] text-[60px] font-bold md:text-[40px]">
            Category Grid
          </h1>
          <p className="text-[#fff] text-[30px] mt-[10px] md:text-[25px]">
            Home || Categories
          </p>
         
        </div>
      </div>
      <ProductDetail />
      </div>
    </div>
  );
};

export default ShopNow;

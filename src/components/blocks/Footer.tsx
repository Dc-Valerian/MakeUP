const Footer = () => {
  return (
    <footer className="w-[100%] h-[100%] flex bg-footer bg-no-repeat bg-center bg-cover mt-[50px]">
      <div
        className="w-[100%] h-[100%] flex justify-center items-center pt-[40px] pb-[20px] flex-col md:pl-[13px] md:items-start"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <img
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1701695953/WhatsApp_Image_2023-12-02_at_04.56.01_9fa268ad-removebg-preview_qmfbvw.png"
          className="md:w-[180px] w-[150px] object-cover"
        />

        <div className="flex items-center mt-[35px] md:flex-col md:items-start">
          <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
            Home
          </h3>
          <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
            Our Menus
          </h3>
          <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
            About Us
          </h3>
          <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
            Contact Us
          </h3>
        </div>
        <div className="text-[#fff] text-[15px] mt-[35px]">
          © 2023 Kode10x MakeUp Web Application
        </div>
      </div>
    </footer>
  );
};

export default Footer;

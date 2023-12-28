

const Subscribe = () => {
    return (
        <div className="w-[100%] h-[100%] justify-center flex-col items-center flex mt-[50px]">
            <h3 className="text-[30px] font-semibold md:text-[25px] sm:text-center">Subscribe to the best recipes feed</h3>
            <input
                type="email"
                placeholder="Enter your email..."
                className="w-[40%] h-[55px] border border-gray-500 pl-[20px] rounded mt-[30px] outline-none md:w-[80%]"
            />
            <button className="w-[250px] mt-[30px] h-[60px] bg-second rounded justify-center items-center text-[#fff]">Subscribe</button>
        </div>
    )
}

export default Subscribe
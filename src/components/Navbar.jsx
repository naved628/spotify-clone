import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore premium
          </p>
          <p className="bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer px-3 py-3">
            NK
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
          <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
            All
          </p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
            Music
          </p>
          <p className="bg-black px-4 py-1 rounded-full cursor-pointer ">
            Podcasts
          </p>
        </div>
    </>
  );
};

export default Navbar;
